// import React, { Component } from 'react';
import { ContactForm } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import {
  Container,
  ContainerPhonebook,
  ContainerContacts,
  BGI,
  ContainerApp,
} from 'components/App/App.styled';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

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
              {isLoading && !error && <b>Request in progress...</b>}
              <Contacts />
            </Section>
          </ContainerContacts>
        </Container>
      </BGI>
    </ContainerApp>
  );
};
