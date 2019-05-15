
const styles = ({
  input: { textAlign: 'left' },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  closeButtonContainer: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  closeButton: { flex: 1 },
  closeButtonText: {
    flex: 1,
    fontSize: 25,
    fontWeight: '700',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10
  },
  isSelectedButtons: { height: 40, width: 115 },
  deleteButton: { backgroundColor: '#D0011B' }
});

export default styles;
