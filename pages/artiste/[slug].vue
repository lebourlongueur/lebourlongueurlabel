<script setup>

const query = gql`
    query Artistes($slug: String!) {
    artiste(where: { slug: $slug }) {
    createdAt
    description
    id
    nom
    publishedAt
    ytbvideo
    slug
    updatedAt
    image{
      id
      url(
        transformation: {document: {output: {format: webp}}, image: {resize: {fit: crop, height: 1024, width: 1024}}}
      )
    }
    }
  }
`;

const artiste = ref();

const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
artiste.value = data.value.artiste;

</script>


<template>
<Container>
  <a href="javascript:history.back()" class="text-slate-500 hover:text-white transition ease-in">
      <i class="ri-arrow-left-line"></i> Retour aux artistes
    </a>
  <iframe class="mt-4 w-full h-96 rounded-3xl" :src="artiste.ytbvideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
  </iframe>
  <div v-if="artiste" class="w-full px-8 pt-8 pb-20 rounded-tr-3xl rounded-tl-3xl flex gap-4 justify-left items-center">
        <NuxtImg :src="artiste.image.url" :alt="artiste.nom" class="rounded-full w-auto h-32 border-8 border-amber-500	"/>
        <div class="flex-column justify-between pl-4 rounded-3xl py-4">
          <h2 class="text-white font-sans text-6xl text-left font-semibold ">{{ artiste.nom }} </h2>
          <p class="text-white opacity-50 font-serif text-xl mt-4"> {{ artiste.description }}</p>

          
        </div>
  </div>
  <div v-else>
    <li>Loading...</li>
  </div>
</Container>
</template>