<script setup>

const query = gql`
    query Blogs($slug: String!) {
    blog(where: { slug: $slug }) {
    createdAt
    publishedAt
    articletag
    articledate
    articleauteur
    id
    slug
    titre
    richtext {
      html
      markdown
      raw
      text
    }
    image {
      id
      url(transformation: {image: {resize: {fit: clip, width: 1024, height: 1024}}})
    }
  }
}
`;

const blog = ref();

const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
blog.value = data.value.blog;

</script>

<style>

.articletext h2{
  color: rgb(138, 164, 206);
  font-size: 2rem;
  font-weight: 900;
  padding-top: 20px;
  padding-bottom: 10px;
  line-height: 2rem;
  
}

.articletext p{
  color: white;
  font-size: 1rem;
  font-weight: 300;
  
}

</style>

<template>
    <Head v-if="blog">
    <Title>{{ blog.titre }} </Title>
    <Meta
      name="description"
      :content="`${blog.titre}`"
    />
    <Meta
      property="og:title"
      :content="`${blog.titre}`"
    />
    <Meta
      property="og:description"
      :content="`${blog.titre}`"
    />
    <Meta property="og:image" :content="blog.image.url" />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="fr_FR" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta
      name="twitter:title"
      :content="`${blog.titre}`"
    />
    <Meta
      name="twitter:description"
      :content="`${blog.titre}`"
    />
    <Meta name="twitter:image" :content="blog.image.url" />
  </Head>

  <Containerarticle>
    <a href="javascript:history.back()" class="text-slate-500 hover:text-white transition ease-in">
      <i class="ri-arrow-left-line"></i> Retour aux articles
    </a>
  <div v-if="blog">
    <TitresH2>{{ blog.titre }}</TitresH2>
    <div class="w-full flex justify-between my-4 items-center	">
      <div class="bg-white py-2 px-6 text-black w-auto rounded-full font-sans font-bold"> 
        {{ blog.articletag }} 
      </div>

      <div>
        <p class="text-right	font-serif text-slate-500	"> 
          Le <span class="text-slate-400	">{{ blog.articledate }}</span>
        </p>
        <p class="text-right	font-serif text-slate-500	"> 
          Par <span class="text-slate-400	">{{ blog.articleauteur }}</span>
        </p>
    </div>
    </div>
    <NuxtImg class="w-full rounded-lg shadow-lg object-cover h-96 object-top	" :src="blog.image.url"
              :alt="blog.titre" />
    <div class="articletext font-serif">
      <div v-html="blog.richtext.html">
      </div>
    </div>

</div>
<div v-else>
<li>Loading...</li>
</div>
</Containerarticle>
</template>