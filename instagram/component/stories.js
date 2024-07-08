export function storie(arr) {
    for (let item of arr) {

        const stories = document.querySelector(`.stories`)
        const story = document.createElement(`div`)
        const img = document.createElement(`img`)
        const nick = document.createElement(`div`)

        story.classList.add(`story`)
        nick.classList.add(`nickname`)

        img.src = item.url
        nick.innerHTML =`nickname`


        story.append(img, nick)

        stories.append(story)
    }
}