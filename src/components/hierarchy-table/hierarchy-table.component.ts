import {Options, Vue} from "vue-class-component";

@Options({
	props: {
		msg: String
	}
})
export default class HierarchyTable extends Vue {
	msg!: string;
}
