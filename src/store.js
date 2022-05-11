
import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			name: 'lee',
			age: 20,
			likes: 30,
			likestate: 0,
			more: {},
		}
	},
	mutations: {
		setMore(state, data) {
			state.more = data;
		},
		이름변경(state) {
			state.name = 'park'
		},
		나이변경(state) {
			state.age++
		},
		좋아요(state, a) {
			if (state.likestate == a) {
				state.likes--
				state.likestate = 0
			}
			else {
				state.likes++
				state.likestate = a
			}
		}
	},
	actions: {
		getData(context) {
			axios.get('https://codingapple1.github.io/vue/more0.json').then((a) => {
				console.log(a.data);
				context.commit('setMore', a.data);


			})
		}

	}
})

export default store