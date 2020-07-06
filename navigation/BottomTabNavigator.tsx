import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { View, Text } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import DadosPessoaisScreen from "../screens/DadosPessoaisScreen";
import FormacaoScreen from "../screens/FormacaoScreen";
import FormacaoComplementarScreen from "../screens/FormacaoComplementarScreen";
import ExperienciaProfissionalScreen from "../screens/ExperienciaProfissionalScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="DadosPessoais"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="DadosPessoais"
        component={DadosPessoaisNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-alt" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Formacao"
        component={FormacaoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-graduate" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="FormacaoComplementar"
        component={FormacaoComplementarNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="certificate" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ExperienciaProfissional"
        component={ExperienciaProfissionalNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="briefcase" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const DadosPessoaisStack = createStackNavigator();

function DadosPessoaisNavigator() {
  return (
    <DadosPessoaisStack.Navigator>
      <DadosPessoaisStack.Screen
        name="DadosPessoaisScreen"
        component={DadosPessoaisScreen}
        options={{ headerTitle: "Dados Pessoais" }}
      />
    </DadosPessoaisStack.Navigator>
  );
}

const FormacaoStack = createStackNavigator();

function FormacaoNavigator() {
  return (
    <FormacaoStack.Navigator>
      <FormacaoStack.Screen
        name="FormacaoScreen"
        component={FormacaoScreen}
        options={{ headerTitle: "Formação" }}
      />
    </FormacaoStack.Navigator>
  );
}

const FormacaoComplementarStack = createStackNavigator();

function FormacaoComplementarNavigator() {
  return (
    <FormacaoComplementarStack.Navigator>
      <FormacaoComplementarStack.Screen
        name="FormacaoComplementarScreen"
        component={FormacaoComplementarScreen}
        options={{ headerTitle: "Formação Complementar" }}
      />
    </FormacaoComplementarStack.Navigator>
  );
}

const ExperienciaProfissionalStack = createStackNavigator();

function ExperienciaProfissionalNavigator() {
  return (
    <ExperienciaProfissionalStack.Navigator>
      <ExperienciaProfissionalStack.Screen
        name="ExperienciaProfissionalScreen"
        component={ExperienciaProfissionalScreen}
        options={{ headerTitle: "Experiência Profissional" }}
      />
    </ExperienciaProfissionalStack.Navigator>
  );
}
