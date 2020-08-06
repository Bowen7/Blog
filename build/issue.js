const { Octokit } = require('@octokit/core')
const request = require('request')
const process = require('process')
const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
})
async function add({ title, content }) {
	const response = await octokit.request('POST /repos/{owner}/{repo}/issues', {
		owner: 'Bowen7',
		repo: 'Blog',
		title: title,
		body: content,
	})
	return response.data.number
}
async function update({ number, title, content }) {
	await octokit.request('PATCH /repos/{owner}/{repo}/issues/{issue_number}', {
		owner: 'Bowen7',
		repo: 'Blog',
		issue_number: number,
		title: title,
		body: content,
	})
}
module.exports = {
	add,
	update,
}
console.log(request)
