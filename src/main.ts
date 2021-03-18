import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import InputText from "primevue/inputtext";
import Rating from "primevue/rating";
import Dialog from "primevue/dialog";
import RadioButton from "primevue/radiobutton";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.use(ToastService);

app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Toolbar", Toolbar);
app.component("Button", Button);
app.component("FileUpload", FileUpload);
app.component("InputText", InputText);
app.component("Rating", Rating);
app.component("Dialog", Dialog);
app.component("RadioButton", RadioButton);
app.component("Textarea", Textarea);
app.component("InputNumber", InputNumber);
app.component("Dropdown", Dropdown);
app.component("Toast", Toast);


app.mount('#app')
