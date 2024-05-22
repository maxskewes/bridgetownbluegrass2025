import React from 'react';
import PageContainer from '../components/PageContainer';
import ArtistForm from './ArtistForm';
import PageTextBox from '../components/PageTextBox';

const ArtistApply = () => {
  return (
    <PageContainer heading='Artist Apply'>
      <PageTextBox>
        Now accepting applications for 2024! The Bridgetown Bluegrass & Folk
        Festival seeks hard-working artists that are actively creating new and
        original music, and demonstrate a commitment to bringing that music to
        the public through consistent live performance. In this submission form,
        tell us about yourself/your band, send us links to your music, and show
        us what you<span>&#39;</span>ve been up to. Submissions for Bridgetown
        2024 close on March 1, 2024. All artists will be offered at least one 30
        minute set, wristbands for the day of the fest, access to Bridgetown
        Green Room and Hospitality Lounges, and a +1 per band member.
      </PageTextBox>
      <PageTextBox>
        RADIUS CLAUSE: All artists confirmed for Bridgetown 2024 will be asked
        to not play any other Portland area <span>&#40;</span>100 mile radius
        <span>&#41;</span> shows in the festival month <span>&#40;</span>TBD
        <span>&#41;</span> of 2024 and to not announce any other Portland area
        shows in the following month 2024 and beyond until after their set at
        the festival. We are open to exceptions to this request, but ask that
        they are discussed with us before confirming your appearance.
      </PageTextBox>
      <ArtistForm />
    </PageContainer>
  );
};

export default ArtistApply;
