import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import TeamSelector from './Components/TeamSelector';

export default function App() {
  const batsman = teamData.players.filter((x) => x.role === 'batsman');
  const bowler = teamData.players.filter((x) => x.role === 'bowler');

  const [tabs, setTabs] = useState(0);
  const [bat, setBat] = useState(0);
  const [bowl, setBowl] = useState(0);
  const [data, setData] = useState(batsman);

  const tabSelector0 = () => {
    setTabs(0);
    setData(teamData.players.filter((x) => x.role === 'batsman'));

    console.log(data);
  };

  const tabSelector1 = () => {
    setTabs(1);
    setData(teamData.players.filter((x) => x.role === 'bowler'));
    console.log(data);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.plyers}>Players : {bat + bowl}/5</Text>
        <View style={styles.tab_container}>
          <Text
            style={!tabs ? styles.tab_active_text : styles.tab_text}
            onPress={tabSelector0}>
            BAT ({bat}/5)
          </Text>
          <Text
            style={tabs ? styles.tab_active_text : styles.tab_text}
            onPress={tabSelector1}>
            BOWL ({bowl}/5)
          </Text>
        </View>
        <View style={styles.table_header}>
          <Text style={{...styles.table_header_text, flex: 2}}>
            Choose 3-5 {tabs ? 'bowler' : 'batsman'}
          </Text>
          <Text style={{...styles.table_header_text, flex: 1}}>id</Text>
          <Text style={{...styles.table_header_text, flex: 1}}>Credits</Text>
          <Text style={{...styles.table_header_text, flex: 1}}>Team</Text>
        </View>
        <TeamSelector tab={tabs} data={data} />
        <Button
          title="Press me"
          style={styles.button}
          onPress={() => alert('Button with adjusted color pressed')}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  plyers: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15,
  },

  tab_container: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
  },

  table_header: {
    backgroundColor: '#535353',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  button: {
    backgroundColor: '#535353',
    alignItems: 'center',
    height: 50,
    width: 250,
  },
  table_header_text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },

  tab_active_text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15,
  },

  tab_text: {
    color: '#999999',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
});

const teamData = {
  players: [
    {
      id: '1',
      name: 'Tamim Iqbal',
      role: 'batsman',
      credit: 10,
      team: 'a',
    },
    {
      id: '2',
      name: 'Mashrafee Murtoza',
      role: 'bowler',
      credit: 9,
      team: 'b',
    },
    {
      id: '3',
      name: 'Mushfique',
      role: 'batsman',
      credit: 9,
      team: 'a',
    },
    {
      id: '4',
      name: 'Alamin Hossain',
      role: 'bowler',
      credit: 11,
      team: 'a',
    },
    {
      id: '5',
      name: 'A',
      role: 'bowler',
      credit: 8,
      team: 'a',
    },
    {
      id: '6',
      name: 'B',
      role: 'batsman',
      credit: 15,
      team: 'a',
    },
    {
      id: '7',
      name: 'C',
      role: 'bowler',
      credit: 17,
      team: 'a',
    },
    {
      id: '8',
      name: 'D',
      role: 'batsman',
      credit: 2,
      team: 'a',
    },
    {
      id: '9',
      name: 'E',
      role: 'bowler',
      credit: 5,
      team: 'a',
    },
    {
      id: '10',
      name: 'F',
      role: 'batsman',
      credit: 11,
      team: 'a',
    },
    {
      id: '11',
      name: 'G',
      role: 'bowler',
      credit: 15,
      team: 'a',
    },
    {
      id: '12',
      name: 'H',
      role: 'batsman',
      credit: 20,
      team: 'a',
    },
    {
      id: '13',
      name: 'I',
      role: 'bowler',
      credit: 14,
      team: 'a',
    },
    {
      id: '14',
      name: 'J',
      role: 'batsman',
      credit: 9,
      team: 'a',
    },

    {
      id: '15',
      name: 'K',
      role: 'bowler',
      credit: 8,
      team: 'a',
    },
  ],
};
