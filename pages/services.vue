<script setup>
const query = gql`
    query Produits {
    produits(orderBy: id_ASC) {
    id
    slug
    titre
    description
    prix
    image {
      id
      url(
        transformation: {document: {output: {format: webp}}}
      )
    }
  }
}
`;


const produits = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
produits.value = data.value.produits;
</script>

<template>
    <Container>
        <TitresH2><i class="ri-list-indefinite"></i> Nos services</TitresH2>
        <div v-if="produits" class="flex-col gap-4">
            <div v-for="produit in produits" :key="produit.id">
                <div
                    class="mb-9 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                        <img class="rounded-t-lg w-full object-cover h-96" :src="produit.image.url" alt="" />
                    </div>
                    <div class="flex justify-between p-6 items-center">

                        <div>
                            <h5
                                class="mb-2 text-xl font-sans font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {{ produit.titre }}
                            </h5>
                            <p class="font-serif mb-4 pr-2 text-base text-neutral-600 dark:text-neutral-200">
                                {{ produit.description }}
                            </p>

                        </div>

                        <div>
                            <h1 class="mb-2 text-2xl font-sans font-bold">{{ produit.prix }}€ / Jour</h1>
                            <a href="/contact">
                                <BoutonsPrimaire>
                                    Contact
                                </BoutonsPrimaire>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Container>
</template>
