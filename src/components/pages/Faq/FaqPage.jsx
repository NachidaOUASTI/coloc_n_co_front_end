import './FaqPage.scss';
import { useMediaQuery } from 'react-responsive';
import FeatureMenuPhone from '../../Phone/FeatureMenuPhone/FeatureMenuPhone';
import HeaderPhoneProfile from '../../Phone/HeaderPhoneProfile/HeaderPhoneProfile';
import Header from '../../Header/Header';
import FeatureMenu from '../../FeatureMenu/FeatureMenu';
import Footer from '../../Footer/Footer';

export default function FaqPage() {
  const isMobile = useMediaQuery({ query: '(min-width: 500px)' });
  return (
    <div className="container">
      {isMobile ? (
        <div className="container__nav">
          <FeatureMenu />
        </div>
      ) : (
        <div className="container__nav__phone">
          <FeatureMenuPhone />
        </div>
      )}
      <div className="container__T">
        {isMobile ? (
          <div className="container__T__header">
            <Header />
          </div>
        ) : (
          <div className="container__T__headerPhone">
            <HeaderPhoneProfile />
          </div>
        )}
        <div className="container__F__title">
          <h2 className="container__F__title__page">FAQ</h2>
          <h3 className="container__F__title__h3">
            La réponse à tes questions se trouve ici 👇
          </h3>
        </div>
        <div className="container__F__main">
          <div className="container__F__main__content">
            <article className="container__F__main__content__article">
              <h4 className="container__F__main__content__article__title">
                1. Comment puis-je ajouter un nouveau colocataire à notre espace
                de gestion ?
              </h4>
              <p className="container__F__main__content__article__paraph">
                Pour ajouter un nouveau colocataire, il suffit de récupérer le
                code colocation qui se trouve dans la page paramètre.
                transmettez ce code a votre futur colocataire et demandez lui de
                s'inscrire en passant par l'inscription et{' '}
                <strong>"Rejoindre une colocation"</strong>, le colocataire à ce
                moment là procède a son inscirption et pourras rejoindre la
                colocation.
              </p>
            </article>
            <article className="container__F__main__content__article">
              <h4 className="container__F__main__content__article__title">
                2. Comment puis-je modifier mes informations de la page
                paramètre ?
              </h4>
              <p className="container__F__main__content__article__paraph">
                Pour modifier mes informations de la page paramètre, il suffit
                de cliquer sur le bouton <strong>"Modifier"</strong> et de
                remplir les champs que vous souhaitez modifier, puis de cliquer
                sur le bouton <strong>"Sauvegarder"</strong>. Vos informations
                seront immédiatement mis à jour.
              </p>
            </article>
            <article className="container__F__main__content__article">
              <h4 className="container__F__main__content__article__title">
                3. Comment puis-je modifier mes informations de la page profile
                ?
              </h4>
              <p className="container__F__main__content__article__paraph">
                Pour modifier mes informations de la page profile, il suffit de
                cliquer sur le bouton "Modifier" et de remplir les champs que
                vous souhaitez modifier, puis de cliquer sur le bouton
                <strong>"Sauvegarder"</strong>. Vos informations seront
                immédiatement mis à jour.
              </p>
            </article>
            <article className="container__F__main__content__article">
              <h4 className="container__F__main__content__article__title">
                4. Quelles sont les mentions légales?
              </h4>
              <p className="container__F__main__content__article__paraph">
                <strong>Mentions légales</strong>
                <br />
                <u>Responsable de la publication :</u> Coloc&co SAS
                <br />
                <u>Adresse </u>: 123 Avenue des Colocataires, 75000 Paris,
                France
                <br />
                <u>Téléphone </u>: +33 1 23 45 67 89
                <br />
                <u>E-mail</u> : contact@colocandco.com
                <br />
                <u>Statut juridique </u>: Société par actions simplifiée (SAS)
                <br />
                <u> Numéro d'identification fiscale</u> : FR12345678901
                <br />
                Hébergeur du site web : Hosting Solutions Ltd.
                <br />
                <u>Adresse de l'hébergeur </u>: 456 Street of Hosting, 12345
                Hosting City, Hostingland
                <br />
                <u>Téléphone de l'hébergeur </u>: +1 234 567 8901
                <br />
                <u>E-mail de l'hébergeur</u> : hosting@hostingsolutions.com
                <br />
                <u>Propriété intellectuelle</u> : Tous les éléments du site web
                Coloc&co, qu'ils soient visuels ou sonores, y compris la
                technologie sous-jacente, sont protégés par le droit d'auteur,
                des marques ou des brevets. Ils sont la propriété exclusive de
                Coloc&co SAS. Toute reproduction, représentation, utilisation ou
                adaptation, sous quelque forme que ce soit, de tout ou partie de
                ces éléments, y compris les applications informatiques, sans
                l'accord préalable et écrit de Coloc&co SAS, est strictement
                interdite. Le non-respect de cette interdiction constitue une
                contrefaçon pouvant engager la responsabilité civile et pénale
                du contrefacteur.
                <br />
                <u>Conditions d'utilisation</u> : L'utilisation du site web
                Coloc&co implique l'acceptation pleine et entière des conditions
                générales d'utilisation détaillées dans les présentes mentions
                légales. <br />
                <u>Politique de confidentialité</u> : Pour connaître notre
                politique de confidentialité et en savoir plus sur la collecte,
                l'utilisation et la protection de vos données personnelles,
                veuillez consulter notre politique de confidentialité.
                <br />
                <u>Loi applicable et juridiction compétente</u> : Tout litige en
                relation avec l'utilisation du site web Coloc&co est soumis au
                droit français. En cas de litige, les tribunaux compétents de
                Paris seront seuls compétents.
                <br />
              </p>
            </article>
          </div>
          <div className="container__content__footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
