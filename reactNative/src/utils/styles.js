import {StyleSheet} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';

export const styles = StyleSheet.create({
  chatscreen: {
    backgroundColor: '#FFF9F0',
    flex: 1,
    padding: 10,
    position: 'relative',
  },
  chatheading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E24E59',
  },
  chattopContainer: {
    // backgroundColor: '#F7F7F7',
    height: 80,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112,112,112,0.5)',
    // elevation: 2,
  },
  chatheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatlistContainer: {
    paddingHorizontal: 10,
  },
  chatemptyContainer: {
    marginTop: 20,
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatemptyText: {fontWeight: 'bold', fontSize: 24, paddingBottom: 30},
  messagingscreen: {
    flex: 1,
    backgroundColor: '#FFF9F0',
  },
  messaginginputContainer: {
    width: '100%',
    minHeight: 100,
    height: 50,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messaginginput: {
    borderWidth: 1,
    height: 45,
    padding: 15,
    flex: 1,
    marginRight: 10,
    borderRadius: 20,
    borderColor: 'rgba(112,112,112,0.5)',
  },
  messagingbuttonContainer: {
    width: '25%',
    height: 45,
    backgroundColor: '#E24E59',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  disabledButton: {
    width: '25%',
    height: 45,
    backgroundColor: '#black',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  mmessageWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  mmessage: {
    maxWidth: '50%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
  },
  mvatar: {
    marginRight: 5,
  },
  cchat: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#FFF9F0',
    height: 80,
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112,112,112,0.5)',
  },
  cavatar: {
    marginRight: 15,
  },
  cprofilepic: {
    height: 70,
    width: 70,
    borderRadius: 30,
  },
  mprofilepic: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 6,
  },
  cusername: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'black',
  },

  crightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    // justifyContent: 'flex-start',
    flex: 1,
  },
  crightContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cmessage: {
    fontSize: 15,
    opacity: 0.7,
  },
  ctime: {
    opacity: 0.5,
    marginRight: 0,
  },
  tabText: {
    fontSize: 20,
  },
  tabShadow: {
    shadowColor: '#CB1F2C',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
  subPlan: {
    fontSize: 30,
    color: '#E24E59',
    marginTop: 15,
    marginBottom: 4,
    fontWeight: 'bold',
    padding: 20,
  },
  subDetails: {
    fontSize: 15,
    color: '#E2868D',
  },
  PlanButton: {
    marginVertical: 20,
    backgroundColor: '#E24E59',
    color: '#FDDBDD',
    borderRadius: 26,
    width: 260,
    alignSelf: 'center',
  },
  PlanSubmitBtn: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    backgroundColor: '#E24E59',
    width: 100,
    borderRadius: 16,
    height: 30,
  },
  hiName: {
    fontSize: 30,
    color: '#E24E59',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova Font',
  },
  welcome: {
    fontSize: 15,
    color: '#E2868D',
    fontWeight: 'bold',
  },
  BMI: {
    fontSize: 24,
    color: '#E2868D',
    marginTop: 15,
    marginLeft: 25,
    marginBottom: 4,
    fontWeight: 'bold',
    width: 180,
    height: 30,
  },
  BMIChartBtn: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 20,
    marginBottom: 4,
    backgroundColor: '#E24E59',
    width: 120,
    borderRadius: 16,
    height: 30,
  },
  BMIChartText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginVertical: 15,
    textAlign: 'center',
    color: '#E24E59',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
    color: '#E2868D',
    fontSize: 18,
  },
  setGoal: {
    textAlign: 'center',
    fontSize: 30,
    color: '#E24E59',
    marginTop: 15,
    marginBottom: 4,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  targetWeight: {
    fontSize: 24,
    color: '#E2868D',
    marginTop: 15,
    marginLeft: 25,
    marginBottom: 7,
    fontWeight: 'bold',
    // width: 180,
    height: 30,
  },
  weightBtn: {
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#E24E59',
    width: 120,
    borderRadius: 16,
    height: 30,
  },
  discoverTitle: {
    textAlign: 'center',
    color: '#E24E59',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  FilteringBtnPressed: {
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#E24E59',
    width: 100,
    borderRadius: 16,
    height: 30,
  },
  FilteringBtn: {
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FDDBDD',
    width: 100,
    borderRadius: 16,
    height: 30,
  },
  FilteringBtnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  CardInfo: {
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingBottom: 30,
  },
  DiscoverUsername: {
    color: '#E24E59',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  DiscoverGym: {
    color: '#B1B1B1',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  DiscoverInterest: {
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FDDBDD',
    borderRadius: 16,
  },
  DiscoverInterestText: {
    color: '#707070',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  LikeIcon: {
    position: 'relative',
    bottom: 265,
    left: 250,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#7CCD96',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 6,
  },
  NopeIcon: {
    position: 'relative',
    bottom: 145,
    left: 50,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#ED8974',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 6,
  },
  SuperIcon: {
    position: 'relative',
    bottom: 205,
    left: 150,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#4FADC2',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 6,
  },
  bio: {
    position: 'relative',
    paddingHorizontal: 20,
    fontSize: 16,
  },
});
