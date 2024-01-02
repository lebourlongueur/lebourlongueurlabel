<script setup>
import { nav } from "./code/navs";

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1>Navigations</TitresH1>

    <TextesParagraphe>
      Les navigations sont des composants qui permettent de naviguer entre les
      différentes pages d'un site web.
    </TextesParagraphe>

    <TitresH2>Barre de navigation</TitresH2>

    <div class="ring-2 ring-gray-200/75 my-8">
      <NavsNav>
        

        <template #links>
          <LinksNavLink to="#">Accueil</LinksNavLink>
          <LinksNavLink to="#">Blog</LinksNavLink>
          <LinksNavLink to="#">À propos</LinksNavLink>
        </template>
      </NavsNav>
    </div>

    <TextesCode :code="nav" />
  </Container>
</template>
