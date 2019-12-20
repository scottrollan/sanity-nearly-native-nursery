// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';
import plant from './documents/plant';

// Object types
import aboutUs from './objects/aboutUs';
import amount from './objects/amount';
import banner from './objects/banner';
import contactUs from './objects/contactUs';
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import hoursLocation from './objects/hoursLocation';
import internalLink from './objects/internalLink';
import landingLogo from './objects/landingLogo'
import link from './objects/link';
import orderForm from './objects/orderForm';
import ourFriends from './objects/ourFriends';
import portableText from './objects/portableText';
import searchPage from './objects/searchPage';
import simplePortableText from './objects/simplePortableText';
import socialMedia from './objects/socialMedia';
import shipping from './objects/shipping';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    aboutUs,
    banner,
    contactUs,
    cta,
    embedHTML,
    figure,
    hoursLocation,
    hero,
    plant,
    amount,
    imageSection,
    internalLink,
    landingLogo,
    link,
    mailchimp,
    orderForm,
    ourFriends,
    page,
    portableText,
    route,
    searchPage,
    shipping,
    simplePortableText,
    siteConfig,
    socialMedia,
    textSection,
  ]),
});
