<template>
  <Container>
    <!-- Section: Design Block -->
<section class="mb-15">
  <!-- Jumbotron -->
  <div class="bg-neutral-50 px-4 py-12 text-center dark:bg-gray-800 md:px-12 lg:text-left">
    <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="mt-12 lg:mt-0">
          <TitresH1> Elevate Your Sound with Exclusive Beats </TitresH1>
          <TextesSubHeader> Discover a world of unique beats that set the stage for your next masterpiece. Dive into a collection crafted with passion and creativity. </TextesSubHeader>

          <BoutonsPrimaire>Get Started</BoutonsPrimaire>
        </div>

        

        <div class="mb-12 lg:mb-0">
          <img src="https://th.bing.com/th/id/OIG.5WalWdYG5Uqx9xb34R3l?pid=ImgGn"
            class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

    <TitresH2> Featured Beats </TitresH2>
    <TextesParagraphe>Explore our curated selection of <TextesGras>standout beats.</TextesGras> Each track is a <TextesItalique>masterpiece waiting </TextesItalique>to enhance your project. From energetic vibes to soulful melodies, find the perfect beat to <TextesSouligne>elevate your work.</TextesSouligne> </TextesParagraphe>

    <TextesCitation>
      Woaw ce site est vraiment fou, il a des componants de fou !!! Genre là il y a une citation incroyable hein ?? 
    </TextesCitation>

    <ListsGrid>
      <li>
        <CardsIconCard to="/docs/composants">
          <template #icon>
            <i
              class="ri-music-2-fill text-blue-500 group-hover:text-white"
            ></i>
          </template>
          Compositions
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/layouts">
          <template #icon>
            <i
              class="ri-play-fill text-blue-500 group-hover:text-white"
            ></i>
          </template>
          Video
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/icones">
          <template #icon>
            <i class="ri-sound-module-fill text-blue-500 group-hover:text-white"></i>
          </template>
          Mix
        </CardsIconCard>
      </li>
    </ListsGrid>
  </Container>
</template>
