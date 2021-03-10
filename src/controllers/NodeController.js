const NodeServices = require('../services/NodeService')

module.exports = {
    ping: (req, res) => {
        res.json({ ping: true })
    },
    all: async (req, res) => {
        let json = { error: '', result: [] }

        let notes = await NodeServices.getALL()

        for (let i in notes) {
            json.result.push({
                id: notes[i].id,
                title: notes[i].title
            })
        }
        res.json(json)
    },
    one: async (req, res) => {
        let json = { error: '', result: {} }
        let id = req.params.id
        let note = await NodeServices.findById(id)

        if (note) json.result = note

        res.json(json)
    },
    new: async (req, res) => {
        let json = { error: '', result: {} }
        let title = req.body.title
        let body = req.body.body
        if (title && body) {
            let noteId = await NodeServices.add(title, body)
            json.resolt = {
                id: noteId,
                title,
                body
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json)
    },
    edit: async (req, res) => {
        let json = { error: '', result: {} }

        let id = req.params.id
        let title = req.body.title
        let body = req.body.body
        if (id && title && body) {
            await NodeServices.update(id, title, body)
            json.resolt = {
                id,
                title,
                body
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json)
    },
    delete: async (req, res) => {
        let json = { error: '', result: {} }
        await NodeServices.delete(req.params.id)
        res.json(json)
    },

}