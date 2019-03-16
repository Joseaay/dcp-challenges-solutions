import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

window.addEventListener = window.addEventListener || function(a, b) {};

window.removeEventListener = window.removeEventListener || function(a, b) {};

window.innerWidth = window.innerWidth || 1440;
