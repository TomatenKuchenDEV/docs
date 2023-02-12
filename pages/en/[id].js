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
			postData: getPostData(params.id, "en")
		}
	}
}

export async function getStaticPaths() {
	return {
	  	paths: getAllPostIds("en"),
	  	fallback: false
	}
}
