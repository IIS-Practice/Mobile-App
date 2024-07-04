import { StyleSheet } from 'react-native';
import { LIGHT_COLOR, PRIMARY_COLOR, DARK_COLOR, SECONDARY_COLOR } from '@utils/colors';

export const styles = StyleSheet.create({
  homeProjects: {
    width: '100%',
    backgroundColor: LIGHT_COLOR,
  },
  homeBox: {
    margin: 40,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'Montserrat SemiBold 600',
    color: DARK_COLOR,
  },
  projectText: {
    fontSize: 18,
    lineHeight: 24.38,
    marginBottom: 20,
    color: DARK_COLOR,
    fontFamily: 'Montserrat Medium 500',
  },
  smallProjectsWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  navButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -50 }],
    display: 'block',
  },
  navButtonLeft: {
    left: -10,
  },
  navButtonRight: {
    right: -10,
  },
  projectSmall: {
    backgroundColor: PRIMARY_COLOR,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    height: 160,
    width: 268,
    maxWidth: 360,
    display: 'none',
    position: 'relative',
  },
  activeProject: {
    display: 'block',
    padding: 15,
  },
  projectContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'flex-start',
  },
  projectContentMain: {
    textAlign: 'left',
  },

  projectDescription: {
    fontSize: 18,
    marginBottom: 20,
  },
  contentName: {
    fontSize: 17,
    fontFamily: 'Montserrat Medium 500',
    marginBottom: 10,
    color: LIGHT_COLOR,
  },
  contentDescription: {
    fontSize: 13,
    color: LIGHT_COLOR,
    fontFamily: 'Montserrat Regular 400',
  },
  contentButton: {
    alignSelf: 'flex-start',
    textDecorationLine: 'none',
    cursor: 'pointer',
    marginTop: 15,
    position: 'absolute', 
    bottom: 0, 
    left: 0,
  },

  textButton: {
    color: LIGHT_COLOR,
  },
  contentButtonHover: {
    color: SECONDARY_COLOR,
  },
});
