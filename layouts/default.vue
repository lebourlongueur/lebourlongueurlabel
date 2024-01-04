<template>
  <Head>
    <Title>Label Bourlongueur | Music to the next Level</Title>
    <Meta name="description" content="Label Bourlongueur | Découvrez l'authenticité musicale à travers nos artistes talentueux et explorez un univers où chaque note raconte une histoire.
" />
<Meta
      property="og:description"
      content="Label Bourlongueur | Découvrez l'authenticité musicale à travers nos artistes talentueux et explorez un univers où chaque note raconte une histoire."
    />
    <Meta
      property="og:image"
      content="./public/img/header.jpg"
    />
    <Meta
      property="og:url"
      content="https://lebourlongueurlabel.vercel.app"
    />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="fr_FR" />
    <Meta property="og:site_name" content="Label Bourlongueur" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@CastorObese" />
    <Meta name="twitter:creator" content="@CastorObese" />
    <Meta name="twitter:title" content="Label Bourlongueur" />
    <Meta
      name="twitter:description"
      content="Label Bourlongueur | Découvrez l'authenticité musicale à travers nos artistes talentueux et explorez un univers où chaque note raconte une histoire."
    />
    <Meta name="theme-color" content="#1f2937" />
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
