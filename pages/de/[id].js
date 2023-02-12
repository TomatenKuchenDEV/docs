import { getAllPostIds, getPostData } from "../../libraries/docs"
import Sidebar from "../../components/sidebar"

export default function({ postData }) {
	return (
		<Sidebar data={postData} />
	)
}

export async function getStaticProps({ params }) {
	return {
		props: {
			postData: getPostData(params.id, "de")
		}
	}
}

export async function getStaticPaths() {
	return {
	  	paths: getAllPostIds("de"),
	  	fallback: false
	}
}
