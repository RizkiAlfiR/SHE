import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, TabHeading, Text, Button} from 'native-base';
import Pelindungkepala from './Stock/Pelindungkepala';
import Pelindungmata from './Stock/Pelindungmata';
import Pelindungtelinga from './Stock/Pelindungtelinga';
import Pelindunghidung from './Stock/Pelindunghidung';
import Pelindungtangan from './Stock/Pelindungtangan';
import Pelindungkaki from './Stock/Pelindungkaki';
import Pelindungbadan from './Stock/Pelindungbadan';
import PPPK from './Stock/PPPK';

export default class StockAPD extends Component {
  static navigationOptions = {
    title: 'Stock APD',
  };

  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Kepala</Text></TabHeading>}>
            <Pelindungkepala />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Mata</Text></TabHeading>}>
            <Pelindungmata />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Telinga</Text></TabHeading>}>
            <Pelindungtelinga />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Hidung</Text></TabHeading>}>
            <Pelindunghidung />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Tangan</Text></TabHeading>}>
            <Pelindungtangan />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Kaki</Text></TabHeading>}>
            <Pelindungkaki />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Pelindung Badan</Text></TabHeading>}>
            <Pelindungbadan />
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.tabstyle}>Paket Obat PPPK</Text></TabHeading>}>
            <PPPK />
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