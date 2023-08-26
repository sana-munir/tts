import React, { useState, useEffect } from 'react';
import {StatusBar} from 'expo-status-bar';
import { Button, View, Text, StyleSheet, Dimensions, ScrollView, TextInput} from 'react-native';
import { doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../../firebase1';

//subject1: 8:30-10:00 subject2: 10:00-11:30 subject3:11:30-1:00 subject4: 1:00-2:30 subject5:2:30-4:00
const TeacherScheduleScreen = ({route}) => {
  const [semester1, setSemester] = useState('');
  const [room1, setroom] = useState('');
  const [subject1, setsubject] = useState('');
  const  id  = route.params.tid;
  useEffect(() => {
    Monday();
    Tuesday();
    Wednesday();
    Thursday();
    Friday();
  }, []);


  function Monday() {
    for (let i = 1; i <= 5; i++) {
    getDoc(doc(db, 'Teachers', id, 'timetable', 'Monday',`lec${i}`,'details'))
      .then((docData) => {
        if (docData.exists()) {
          const semesterValue = docData.data().semester;
          const subjectValue = docData.data().subject;
          const roomValue = docData.data().room;
          setTableData((prevTableData) => {
            const newTableData = [...prevTableData];
            newTableData[i][1] = { subject1: subjectValue, room1: roomValue, semester1: semesterValue };
            return newTableData;
          });
          //setSemester(semesterValue);
          //setroom(roomValue);
          //setsubject(subjectValue);
        } else {
          console.log('No such data is present in the database');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
function Tuesday() {
  for (let i = 1; i <= 5; i++) {
  getDoc(doc(db, 'Teachers',id, 'timetable', 'Tuesday',`lec${i}`,'details'))
    .then((docData) => {
      if (docData.exists()) {
        const semesterValue = docData.data().semester;
        const subjectValue = docData.data().subject;
        const roomValue = docData.data().room;
        setTableData((prevTableData) => {
          const newTableData = [...prevTableData];
          newTableData[i][2] = { subject1: subjectValue, room1: roomValue, semester1: semesterValue };
          return newTableData;
        });
        //setSemester(semesterValue);
        //setroom(roomValue);
        //setsubject(subjectValue);
      } else {
        console.log('No such data is present in the database');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
}



  function Wednesday() {
    for (let i = 1; i <= 5; i++) {
    getDoc(doc(db, 'Teachers',id, 'timetable', 'Wednesday',`lec${i}`,'details'))
      .then((docData) => {
        if (docData.exists()) {
          const semesterValue = docData.data().semester;
          const subjectValue = docData.data().subject;
          const roomValue = docData.data().room;
          setTableData((prevTableData) => {
            const newTableData = [...prevTableData];
            newTableData[i][3] = { subject1: subjectValue, room1: roomValue, semester1: semesterValue };
            return newTableData;
          });
          //setSemester(semesterValue);
          //setroom(roomValue);
          //setsubject(subjectValue);
        } else {
          console.log('No such data is present in the database');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
function Thursday() {
  for (let i = 1; i <= 5; i++) {
  getDoc(doc(db, 'Teachers', id, 'timetable', 'Thursday',`lec${i}`,'details'))
    .then((docData) => {
      if (docData.exists()) {
        const semesterValue = docData.data().semester;
        const subjectValue = docData.data().subject;
        const roomValue = docData.data().room;
        setTableData((prevTableData) => {
          const newTableData = [...prevTableData];
          newTableData[i][4] = { subject1: subjectValue, room1: roomValue, semester1: semesterValue };
          return newTableData;
        });
        //setSemester(semesterValue);
        //setroom(roomValue);
        //setsubject(subjectValue);
      } else {
        console.log('No such data is present in the database');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
}
function Friday() {
  for (let i = 1; i <= 5; i++) {
  getDoc(doc(db, 'Teachers', id, 'timetable', 'Friday',`lec${i}`,'details'))
    .then((docData) => {
      if (docData.exists()) {
        const semesterValue = docData.data().semester;
        const subjectValue = docData.data().subject;
        const roomValue = docData.data().room;
        setTableData((prevTableData) => {
          const newTableData = [...prevTableData];
          newTableData[i][5] = { subject1: subjectValue, room1: roomValue, semester1: semesterValue };
          return newTableData;
        });
        //setSemester(semesterValue);
        //setroom(roomValue);
        //setsubject(subjectValue);
      } else {
        console.log('No such data is present in the database');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
}





  const [tableData, setTableData] = useState([
    ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    ['8:30 - 10:00',{ subject1:'ASSEM04',room1: 'Room 113',semester1: 'BS-4th' },{ subject1, room1, semester1 },{ subject1, room1, semester1},{ subject1, room1, semester1 }, { subject1, room1, semester1 }],
    ['10:00 - 11:30', { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1 }],
    ['11:30 - 1:00', { subject1, room1, semester1 }, { subject1, room1, semester1}, { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1 }],
    ['1:00 - 2:30', { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1 }],
    ['2:30 - 4:00', { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1 }, { subject1, room1, semester1}, { subject1, room1, semester1 }],
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
          <View key={cellIndex} >
            {cellIndex === 0 ? (
              <Text style={styles.tableCellText}>{cellData}</Text>
            ) : (
              <View style={styles.tableCell}>
                <Text style={styles.tableSubDataText}>Subject</Text>
                {cellData.subject1 && (
                  <>
                  <Text style={styles.tableSubDataText1}>{cellData.subject1}</Text></>
                )}
                <Text style={styles.tableSubDataText}>Semester</Text>
                {cellData.semester1 && (
                  <>
                <Text style={styles.tableSubDataText1}>{cellData.semester1}</Text></>)}
                <Text style={styles.tableSubDataText}>Room</Text>
                {cellData.room1 && (
                  <>
                <Text style={styles.tableSubDataText1}>{cellData.room1}</Text>
                </>)}
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

export default TeacherScheduleScreen;

//const TeacherScheduleScreen