<template>
  <Head>
    <Title>Label Bourlongueur | Music to the next Level</Title>
    <Meta name="description" content="papichulobeats" />
  </Head>
  <LayoutsBase>
    <template #navigation>
      <NavsNav>
        <template #logo>
          <TitresLogo><img src="../public/img/logo-lebourlongueur.svg" width="50" height="auto"> </TitresLogo>
        </template>

        <template #links>
          <LinksNavLink to="/">Accueil</LinksNavLink>
          <LinksNavLink to="/services">Services</LinksNavLink>
          <LinksNavLink to="/societe">Société</LinksNavLink>
          <LinksNavLink to="/equipe">Équipe</LinksNavLink>
          <LinksNavLink to="/blogactualite">Blog</LinksNavLink>
          <LinksNavLink to="/contact">Contact</LinksNavLink>

        </template>
      </NavsNav>
    </template>

    <template #content>
      <slot />
    </template>

    <template #footer>
      <FootersBasic />
    </template>
  </LayoutsBase>
</template>
