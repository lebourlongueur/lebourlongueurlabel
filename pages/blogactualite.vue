<script setup>
const query = gql`
    query Blogs {
    blogs(orderBy: id_ASC) {
    id
    slug
    titre
    publishedAt
    articletag
    image {
      id
      url(
        transformation: {image: {resize: {fit: crop, height: 1024, width: 1024}}, document: {output: {format: webp}}}
      )
    }
    richtext {
      html
      markdown
      raw
      text
    }
  }
}
`;


const blogs = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
blogs.value = data.value.blogs;
</script>

<template>
  <Container>
    <TitresH2>
        <i class="ri-article-fill"></i> Nos articles hey
      </TitresH2>
    <div class="container p-6 mx-auto space-y-8 w-full"> 
        <article class="">
          <div v-if="blogs" class="flex gap-4 ">
            <div v-for="blog in blogs" :key="blog.id" >
            <NuxtLink :to="`/blog/${blog.slug}`">
            <div class="dark:bg-gray-900 rounded-lg overflow-clip w-72 h-full">
              
                <NuxtImg class="object-cover w-full h-52 dark:bg-gray-500" :src="blog.image.url" :alt="blog.titre" />
              


              <div class="flex flex-col flex-1 p-6">
                <p rel="noopener noreferrer" 
                  class="text-xs tracki uppercase text-amber-600	">{{ blog.articletag }}</p>
                <h3 class="flex-1 py-2 text-lg font-semibold leadi">{{ blog.titre }}</h3>
                
              </div>
            </div>
          </NuxtLink>
        </div>
          </div>
        </article>
    </div>
  </Container>
</template>