import React, { useState } from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput} from 'react-native';

const Timetable = () => {
  const [tableData, setTableData] = useState([
    ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    [
    '8:30 - 10:00',
    { subject: 'OS', room: '101', semester: 'MCS-1st' },
    { subject: 'OS', room: '101', semester: 'MCS-1st' },
    { subject: 'nill', room: '', semester: '' },
    { subject: 'nill', room: '', semester: '' },
    { subject: 'Automata', room: 'Window Lab', semester: 'MCS-3rd' },
  ],
    ['10:00 - 11:30', { subject: 'Compiler', room: '101', semester: 'MCS-1st' },
    { subject: 'Compiler', room: '101', semester: 'MCS-1st' },
    { subject: 'AI', room: '202', semester: 'BSCS-2nd' },
    { subject: 'AI', room: '101', semester: 'MCS-1st' },
    { subject: 'nill', room: '', semester: '' },
  ],
    [
      '11:30 - 1:00',
      { subject: 'React', room: 'CRDC Lab', semester: 'MCS-1st' },
      { subject: 'React', room: 'CRDC Lab', semester: 'MCS-1st' },
      { subject: 'AI Lab', room: 'SUN Lab', semester: 'BS-2nd' },
      { subject: 'AI Lab', room: 'SUN Lab', semester: 'BS-2nd' },
      { subject: 'nill', room: '', semester: '' },
    ],
    [
      '1:00 - 2:30',
      { subject: 'AdvancedP', room: 'Sun Lab', semester: 'PHD Class' },
      { subject: 'nill', room: '', semester: '' },
      { subject: 'nill', room: '', semester: '' },
      { subject: 'nill', room: '', semester: '' },
      { subject: 'nill', room: '', semester: '' },
    ],
    [
      '2:30 - 4:00',
      { subject: 'nill', room: '', semester: 'MCS-1st' },
      { subject: 'nill', room: '', semester: 'MCS-1st' },
      { subject: 'nill', room: '', semester: 'BSCS-2nd' },
      { subject: 'nill', room: '', semester: 'MCS-1st' },
      { subject: 'nill', room: '', semester: 'MCS-1st' },
    ],
  ]);

  const renderTableHeaders = () => {
    return (
      <View style={styles.tableRow}>
        {tableData[0].map((header, index) => (
          <Text key={index} style={styles.tableHeader}>
            {header}
          </Text>
        ))}
      </View>
    );
  };

   const renderTableData = () => {
    return tableData.slice(1).map((rowData, index) => (
      <View key={index} style={styles.tableRow}>
        {rowData.map((cellData, cellIndex) => (
          <View key={cellIndex} style={styles.tableCell}>
            {cellIndex === 0 ? (
              <Text style={styles.tableCellText}>{cellData}</Text>
            ) : (
              <View>
                <Text style={styles.tableSubDataText}>Subject</Text>
                <Text style={styles.tableSubDataText1}>{cellData.subject}</Text>
                <Text style={styles.tableSubDataText}>Semester</Text>
                <Text style={styles.tableSubDataText1}>{cellData.semester}</Text>
                <Text style={styles.tableSubDataText}>Room</Text>
                <Text style={styles.tableSubDataText1}>{cellData.room}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    ));
  };



  return (
    <ScrollView>
    <View style={styles.container}>
      {renderTableHeaders()}
      {renderTableData()}
       
    </View>
    <StatusBar style="auto" />
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 2,
    marginTop:40,
  },
  tableRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    fontSize:10,
    textAlign: 'center',
  },
  tableHeader: {
    flex: 1,
    paddingBottom:10,
    backgroundColor: 'darkcyan',
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize:10,
    color:'white',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: Dimensions.get('window').width / 6,
    fontSize:10,
    backgroundColor: 'powderblue',
  },
  tableCellText: {
    flex: 1,
    color:'white',
    borderWidth: 1,
    borderColor: 'white',
    fontWeight: 'bold',
    flexWrap:'wrap',
    fontSize:10,
    width: Dimensions.get('window').width / 6,
    textAlign: 'center',
    justifyContent:'center',
    backgroundColor:'darkcyan',
  },
  tableSubDataText: {
    fontWeight: 'bold',
    fontSize:10,
     textAlign: 'center',
  },
  tableSubDataText1: {
    fontSize:10,
    textAlign: 'center',
  },
});

export default Timetable;
