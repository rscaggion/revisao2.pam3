import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "./components/Inicio";

const Menu = createBottomTabNavigator().Navigator;
const Itens = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <Itens name="Início" component={Inicio}/>
      </Menu>
    </NavigationContainer>
  );
}
