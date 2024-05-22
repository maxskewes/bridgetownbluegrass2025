import React from 'react';
import PageContainer from '../components/PageContainer';
import PageTextBox from '../components/PageTextBox';
import VolunteerForm from './VolunteerForm';

const Volunteer = () => {
  return (
    <PageContainer heading='Volunteer'>
      {/* PageTextBox for requesting volunteers */}
      <PageTextBox>
        The Bridgetown Fest depends on a community of volunteers to take
        tickets, pour beers, and sell merch. Though the positions have been
        organized in such a way that their are no "bad" slots, we will do our
        best to accommodate all schedules. If you would like to volunteer,
        please let us know which times you're available and your order of
        preference. Volunteers get a festival pass, festival shirt, and two
        drinks tickets for a three hour slot.
      </PageTextBox>

      {/* PageTextBox when all positions are filled */}
      {/* <PageTextBox>
        All volunteer positions for this year's festival have been filled. Thank
        you for your interest, we hope to see you there regardless! Please don't
        hesitate to apply when we announce the next fest.
      </PageTextBox> */}
      <div>
        <VolunteerForm />
      </div>
    </PageContainer>
  );
};

export default Volunteer;
