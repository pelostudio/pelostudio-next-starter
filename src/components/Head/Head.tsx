import NextHead from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';
import urljoin from 'url-join';

type Props = {
  title: string;
  description?: string;
};

const Head = ({title, description}: Props): JSX.Element => {
  const router = useRouter();

  const baseUrl = 'https://pelostudio-next-starter.io';
  const canonical = urljoin(baseUrl, router.pathname);
  const siteTitle = 'pelostudio-next-starter';
  const metaTitle = `${siteTitle} - ${title}`;

  const thumbnail = urljoin(baseUrl, '/images/thumbnail.jpg'); // Size: 1200x600px

  // const businessSchema = {};

  return (
    <NextHead>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0, shrink-to-fit=no'
      />

      <link
        rel='preload'
        as='font'
        crossOrigin=''
        type='font/ttf'
        href='/fonts/Raleway-Light.ttf'
      />
      <link
        rel='preload'
        as='font'
        crossOrigin=''
        type='font/ttf'
        href='/fonts/OpenSans-Regular.ttf'
      />

      <meta name='theme-color' content='#ffffff' />

      {/* https://github.com/audreyfeldroy/favicon-cheat-sheet */}
      {/* <link rel='mask-icon' href='/favicon.svg' color='#6FCF97' /> */}
      <link rel='apple-touch-icon-precomposed' href='/favicon_180.png' />
      <link rel='shortcut icon' sizes='192x192' href='/favicon_192.png' />

      {/* <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{__html: JSON.stringify(businessSchema)}}
      /> */}

      <meta property='og:type' content='website' />
      <meta property='og:locale' content='fr_FR' />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:image' content={thumbnail} />
      <meta property='og:image:secure_url' content={thumbnail} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image:alt' content={metaTitle} />

      <link rel='canonical' href={canonical} />
      <meta property='og:url' content={canonical} />

      <title>{metaTitle}</title>
      <meta property='og:title' content={metaTitle} />

      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
    </NextHead>
  );
};

export default Head;
