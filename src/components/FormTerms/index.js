import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Button from 'react-toolbox/lib/button/Button';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import { Validation } from '../../utils';
import './styles.css';

const FormTerms = ({ formData, onContinue, submitForm }) => (
  <div className="FormTerms">
    <div className="FormTerms__terms">
      <h1 className="FormTerms__title">Terms of Agreement</h1>
      <p className="FormTerms__paragraph">
        Lorem ipsum dolor amet butcher vinyl cornhole squid, williamsburg pok
        pok humblebrag hot chicken hammock authentic gluten-free meggings direct
        trade leggings pork belly. Roof party kickstarter chia swag bespoke
        farm-to-table polaroid. Post-ironic small batch raclette intelligentsia
        ennui, live-edge neutra franzen. Pabst la croix kale chips, chartreuse
        gastropub pug beard mlkshk air plant polaroid tumeric. Four dollar toast
        quinoa activated charcoal organic succulents, vaporware blog church-key.
        Echo park whatever lumbersexual vape, kogi migas craft beer marfa
        stumptown ramps tote bag banjo woke bitters.
      </p>
      <p className="FormTerms__paragraph">
        VHS coloring book everyday carry keytar viral. Humblebrag everyday carry
        trust fund, celiac disrupt synth unicorn shabby chic lumbersexual roof
        party yr paleo ramps umami. YOLO green juice poke crucifix kombucha
        fingerstache wolf food truck narwhal brunch. Green juice blue bottle
        kogi snackwave, prism 90 twee jean shorts stumptown master cleanse
        sustainable swag la croix celiac shaman.
      </p>
      <p className="FormTerms__paragraph">
        La croix tattooed thundercats, vinyl synth forage 8-bit actually
        slow-carb. Fingerstache crucifix offal, tattooed health goth roof party
        polaroid hella disrupt. Distillery scenester pinterest paleo occupy
        copper mug narwhal cornhole everyday carry chillwave. Taxidermy
        typewriter locavore shoreditch health goth fingerstache.
      </p>
      <p className="FormTerms__paragraph">
        Four dollar toast mlkshk iceland vexillologist, authentic tacos hashtag
        pickled tumblr locavore meggings flannel. Coloring book 90 vice kogi
        church-key. Post-ironic organic farm-to-table selvage, pinterest hell of
        YOLO before they sold out brooklyn hexagon kitsch vinyl kickstarter.
        Photo booth pinterest craft beer hella taxidermy literally actually.
        Poke 3 wolf moon unicorn tumeric. Heirloom blog occupy, thundercats
        iceland yuccie taiyaki mustache poutine marfa.
      </p>
      <p className="FormTerms__paragraph">
        Ethical kale chips sartorial occupy austin lyft synth prism kogi pug
        lo-fi try-hard deep v mixtape scenester. Bitters cronut mixtape tumblr
        narwhal. Leggings cornhole wolf, chambray meggings cred sartorial
        narwhal brunch banh mi tumblr chartreuse. Vaporware post-ironic
        bushwick, yuccie kale chips kogi butcher. Cold-pressed pitchfork hella,
        taiyaki literally meh synth umami celiac flannel tbh humblebrag.
        Literally cornhole cray wolf shabby chic iPhone. Taxidermy offal echo
        park, scenester mustache chambray woke la croix food truck health goth
        polaroid subway tile snackwave.
      </p>
    </div>

    <Formik
      className="FormTerms__accept"
      initialValues={{ acceptTerms: formData.acceptTerms || '' }}
      validationSchema={Validation.TermsSchema}
      onSubmit={onContinue}
      render={({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <form>
          <Checkbox
            className="FormTerms__accept-checkbox"
            label={'I have read the terms and agree to the conditions above.'}
            checked={values.acceptTerms === true}
            onChange={value => setFieldValue('acceptTerms', value)}
            onBlur={() => setFieldTouched('acceptTerms', true)}
          />
          <Button
            className="FormTerms__continue-button"
            label={submitForm ? 'Submit' : 'Continue'}
            onClick={() => onContinue(values)}
            disabled={
              values.acceptTerms === '' || (errors.acceptTerms ? true : false)
            }
            raised
          />
          <p className="FormTerms__accept-error">
            {touched.acceptTerms && errors.acceptTerms}
          </p>
        </form>
      )}
    />
  </div>
);

FormTerms.propTypes = {
  formData: PropTypes.object,
  onContinue: PropTypes.func,
  submitForm: PropTypes.bool
};

export default FormTerms;
