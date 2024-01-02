<script setup>
const query = gql`
  query Artistes {
    artistes(orderBy: id_ASC) {
      createdAt
    description
    id
    nom
    publishedAt
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


const artistes = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
artistes.value = data.value.artistes;
</script>

<template>
  <Container>
    <TitresH2>
      <i class="ri-magic-fill"></i> Nos artistes
    </TitresH2>
    <ul v-if="artistes" class="flex justify-between gap-4 w-full">
      <li v-for="artiste in artistes" :key="artiste.id" class="w-full ">
        <NuxtLink :to="`/artiste/${artiste.slug}`">

          <CardsEquipeCard>
              <NuxtImg class="w-54 h-54 mb-3 rounded-lg shadow-lg object-cover" :src="artiste.image.url"
                :alt="artiste.nom" />
              <h5 class="mb-1 text-2xl font-semibold text-gray-900 dark:text-white text-center">{{ artiste.nom }}</h5>
              <span class="text-sm font-light text-white opacity-50 text-center">{{ artiste.description }}</span>
              <div class="mt-4 opacity-50">Plus de détail <i class="ri-arrow-right-line"></i></div>
          </CardsEquipeCard>
        </NuxtLink>

      </li>

    </ul>

    <ul v-else>
      <li>Loading...</li>
    </ul>

  </Container>
</template>