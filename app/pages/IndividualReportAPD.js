import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, TabHeading, Text, Fab, Button, Icon } from 'native-base';
import PelindungKepalaReport from './IndividualReport/PelindungKepalaReport';
import PelindungMataReport from './IndividualReport/PelindungMataReport';
import PelindungTelingaReport from './IndividualReport/PelindungTelingaReport';
import PelindungHidungReport from './IndividualReport/PelindungHidungReport';
import PelindungTanganReport from './IndividualReport/PelindungTanganReport';
import PelindungKakiReport from './IndividualReport/PelindungKakiReport';
import PelindungBadanReport from './IndividualReport/PelindungBadanReport';
import PPPKReport from './IndividualReport/PPPKReport';

export default class IndividualReportAPD extends Component {
  static navigationOptions = {
    title: 'Individual Report',
  };

  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Kepala</Text></TabHeading>}>
            <PelindungKepalaReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Mata</Text></TabHeading>}>
            <PelindungMataReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Telinga</Text></TabHeading>}>
            <PelindungTelingaReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Hidung</Text></TabHeading>}>
            <PelindungHidungReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Tangan</Text></TabHeading>}>
            <PelindungTanganReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Kaki</Text></TabHeading>}>
            <PelindungKakiReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Badan</Text></TabHeading>}>
            <PelindungBadanReport />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Paket Obat PPPK</Text></TabHeading>}>
            <PPPKReport />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabstyle: {
    textAlign: 'center',
    fontSize: 13
  }
});