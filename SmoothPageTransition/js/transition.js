import highway from "@dogstudio/highway";
import gsap from "gsap";
import {
	Timeline
} from "gsap/gsap-core";

class Fade extends highway.Transition {
	//Page enter
	in ({
		from,
		to,
		done
	}) {
		const tl = new Timeline();
		tl.fromTo(to, 0.5, {
				left: '-100%',
				top: '50%'
			}, {
				left: '0%'
			})
			.fromTo(to, 0.5, {
				height: '2vh'
			}, {
				height: '90vh',
				top: '10vh',
				onComplete: (() => {
					from.remove();
					done();
				})
			})
			.fromTo(to.children[0], 1, {
				opacity: 0
			}, {
				opacity: 1
			});
	}

	//Page leave
	out({
		from,
		done
	}) {
		done();
	}
}

export default Fade;
