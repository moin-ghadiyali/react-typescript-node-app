import {Doc, DocBuilder, group} from 'doctopus';

const docs = new DocBuilder();
const docFactory = new Doc();

docs.set('title', 'React-Node-Typescript API Documations');
docs.set('version', '1.0.0');
docs.set('description', 'React-Node-Typescript RESTful API with Docs');
docs.set('basePath', '/');

docs.add('/swagger', docFactory.get()
    .group('Documentation')
    .description('Gets a Swagger Specification')
    .summary('Swagger')
    .onSuccess(200, {
        description: 'Swagger Specification',
        schema: Doc.object()
    })
    .build());

exports.swaggerJson = (req:any, res:any) => {
    res.send(docs.build());
}

exports.swagger = (req:any, res:any) => {
    res.redirect('/api-docs/index.html');
}