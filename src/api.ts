import * as bodyParser from 'body-parser';
import * as express from 'express';

import { InstrumentModel } from './models';

// available api options
const options = {
  // this option enables persisting data to the "./data" directory
  shouldPersistData: true
};

async function initApi() {
  // initialize data
  const data = {
    instruments: await new InstrumentModel().load()
  };

  // create api
  const api = express();
  api.use(bodyParser.json({ limit: '50mb' }));

  // GET /instruments - get all instruments
  api.get('/instruments', (req, res) => {
    const allInstruments = data.instruments.toArray();
    res.status(200).send(allInstruments);
  });

  // GET /instruments/:id - get one instrument
  api.get('/instruments/:id', (req, res) => {
    const oneInstrument = data.instruments.get(req.params.id);
    res.status(200).send(oneInstrument);
  });

  // POST /instruments - create new instrument
  api.post('/instruments', async (req, res) => {
    const newInstrument = data.instruments.create(req.body);
    res.status(200).send(newInstrument);
  });

  // DELETE /instruments/:id - delete existing instrument
  api.delete('/instruments/:id', async (req, res) => {
    const deletedInstrument = data.instruments.delete(req.params.id);
    await data.instruments.save();
    res.status(200).send(deletedInstrument);
  });

  // PUT /instruments/:id - update existing instrument
  api.put('/instruments/:id', async (req, res) => {
    const deletedInstrument = data.instruments.update(req.params.id, req.body);
    await data.instruments.save();
    res.status(200).send(deletedInstrument);
  });

  // start the api
  api.listen(8080, () => console.log('Listening...'));

  // persist data frequently (on a timer or after every request)
  if (options.shouldPersistData) {
    setInterval(async () => {
      await data.instruments.save();
    }, 5000);
  }
}

initApi();
