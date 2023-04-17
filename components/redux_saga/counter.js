import React from 'react';
import {  View, Text, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';

class Counter extends React.Component{
    render(){
        return (
            <View style={styles.card}>
                <Text>
                    Banyak Data : {this.props.counter.length} Data Dengan Isi Random
                </Text>

                <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
                  <Text style = { styles.search }>
                    Tambah Data
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
                  <Text style = { styles.search }>
                    Hapus Data
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style = { styles.search }>
                    Ubah Data
                  </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
  console.log('State:');
  console.log(state);

  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxIncreaseCounter: () => dispatch({
      type: 'TAMBAH',
      value: 1,
    }),
    reduxDecreaseCounter: () => dispatch({
      type: 'KURANG',
      value: 1,
    }),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);