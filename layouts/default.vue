<template>
  <Head>
    <Title>Papichulobeats | 🔥 Banger beats 🔥</Title>
    <Meta name="description" content="papichulobeats" />
  </Head>
  <LayoutsBase>
    <template #navigation>
      <NavsNav>
        <template #logo>
          <TitresLogo><img src="../public/img/logo-pb-2.svg" width="28" height="auto"></TitresLogo>
        </template>

        <template #links>
          <LinksNavLink to="/">Accueil</LinksNavLink>
          <LinksNavLink to="/work">Work</LinksNavLink>
          <LinksNavLink to="/equipe">Équipe</LinksNavLink>
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
