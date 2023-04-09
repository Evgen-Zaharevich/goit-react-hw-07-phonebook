// import React, { Component } from 'react';
import { ContactForm } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import {
  Container,
  ContainerPhonebook,
  ContainerContacts,
  BGI,
  ContainerApp,
} from 'components/App/App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
