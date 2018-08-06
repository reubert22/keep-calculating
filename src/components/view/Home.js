//@flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from "react-native";
import RowDivision from "../../_components/RowDivision";
import ColumnDivision from "../../_components/ColumnDivision";
import ClearIcon from "../../img/clearIcon.png";
import CalcButtons from "../../_components/_calculator/CalcButtons";

type Props = {};

type State = {
  result: string
};
export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      result: "0"
    };
  }

  handleValue = (digit: any) => {
    const { result } = this.state;
    this.setState({
      result: result + digit
    });
  };

  clearResult = () => {
    this.setState({
      result: "0"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerVisorDirection}>
          <View style={styles.containerVisor}>
            <View
              style={{
                width: "80%",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                padding: 5
              }}
            >
              <Text style={styles.result}>{this.state.result}</Text>
            </View>
            <TouchableNativeFeedback onPress={() => this.clearResult()}>
              <View
                style={{
                  width: "20%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image style={styles.clearIcon} source={ClearIcon} />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>

        <View style={styles.containerRows}>
          {/* 1 */}
          <CalcButtons value={"7"} handlePress={() => this.handleValue("7")} />

          <ColumnDivision />

          <CalcButtons value={"8"} handlePress={() => this.handleValue("8")} />

          <ColumnDivision />

          <CalcButtons value={"9"} handlePress={() => this.handleValue("9")} />

          <ColumnDivision />

          <CalcButtons value={"/"} handlePress={() => this.handleValue("/")} />
        </View>
        <RowDivision />
        {/* 2 */}
        <View style={styles.containerRows}>
          <CalcButtons value={"4"} handlePress={() => this.handleValue("4")} />

          <ColumnDivision />

          <CalcButtons value={"5"} handlePress={() => this.handleValue("5")} />

          <ColumnDivision />

          <CalcButtons value={"6"} handlePress={() => this.handleValue("6")} />

          <ColumnDivision />

          <CalcButtons value={"*"} handlePress={() => this.handleValue("*")} />
        </View>
        <RowDivision />
        {/* 3 */}
        <View style={styles.containerRows}>
          <CalcButtons value={"1"} handlePress={() => this.handleValue("1")} />

          <ColumnDivision />

          <CalcButtons value={"2"} handlePress={() => this.handleValue("2")} />

          <ColumnDivision />

          <CalcButtons value={"3"} handlePress={() => this.handleValue("3")} />

          <ColumnDivision />

          <CalcButtons value={"-"} handlePress={() => this.handleValue("-")} />
        </View>
        <RowDivision />
        {/* 4 */}
        <View style={styles.containerRows}>
          <CalcButtons value={","} handlePress={() => this.handleValue(",")} />

          <ColumnDivision />

          <CalcButtons
            value={"00"}
            handlePress={() => this.handleValue("00")}
          />

          <ColumnDivision />

          <CalcButtons value={"0"} handlePress={() => this.handleValue("0")} />

          <ColumnDivision />

          <CalcButtons value={"+"} handlePress={() => this.handleValue("+")} />
        </View>
        <RowDivision />
        {/* 5 */}
        <View style={styles.containerRows}>
          <TouchableNativeFeedback onPress={() => this.handleValue("=")}>
            <View style={styles.containerEqual}>
              <Text style={styles.equalButton}>=</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <RowDivision />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    backgroundColor: "#000"
  },
  containerButtons: {
    width: "24.6%",
    backgroundColor: "#3b3c3d",
    alignItems: "center",
    justifyContent: "center"
  },
  containerEqual: {
    width: "100%",
    backgroundColor: "#48db48",
    alignItems: "center",
    justifyContent: "center"
  },
  equalButton: {
    fontSize: 24,
    color: "#3b3c3d"
  },
  buttons: {
    fontSize: 24,
    color: "#06FF06"
  },
  result: {
    fontSize: 40,
    color: "#06FF06"
  },
  clearIcon: {
    width: 30,
    height: 30
  },
  containerRows: {
    flexDirection: "row",
    width: "100%",
    height: 80
  },
  containerVisorDirection: {
    flexDirection: "row",
    marginBottom: 1
  },
  containerVisor: {
    flexDirection: "row",
    width: "100%",
    height: 160,
    backgroundColor: "#3b3c3d"
  }
});
