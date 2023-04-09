// import React, { Component } from 'react';
import { ContactForm } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import {
  Container,
  ContainerPhonebook,
  ContainerContacts,
  BGI,
  ContainerApp,
} from 'components/App/App.styled';

export const App = () => {
  return (
    <ContainerApp>
      <BGI>
        <Container>
          <ContainerPhonebook>
            <Section title={'Phonebook'}>
              <ContactForm />
            </Section>
          </ContainerPhonebook>
          <ContainerContacts>
            <Section title={'Contacts'}>
              <Filter />
              <Contacts />
            </Section>
          </ContainerContacts>
        </Container>
      </BGI>
    </ContainerApp>
  );
};
