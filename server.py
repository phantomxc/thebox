from twisted.web.server import Site, NOT_DONE_YET
from twisted.web.resource import Resource
from twisted.internet import reactor
from twisted.web.static import File
from twisted.internet import defer

import json

from jinja2 import Environment, FileSystemLoader

#---------------
# JINJA STUFF
#---------------
template_root = './'
jloader = FileSystemLoader(template_root, encoding='utf-8')
jenv = Environment(
    block_start_string='[[',
    block_end_string=']]',
    variable_start_string='[-',
    variable_end_string='-]',
    comment_start_string='[#',
    comment_end_string='#]',
    loader=jloader,
    extensions=[],
    cache_size=50,
)

jenv.globals['cssurl'] = '/css/'
jenv.globals['jsurl'] = '/js/'

def jrender(request, template_name, params=None):
    """
    Use Jinja to render a html file
    """
    if params is None:
        params = {}
    request.setHeader("content-type", "text/html")
    return jenv.get_template(template_name).render(params).encode('utf-8')



class MainResource(Resource):
    """
    Handles the root directory
    """
    def render_GET(self, request):
        return jrender(request, 'index2.html')


class Boxes(Resource):
    
    def render_GET(self, request):
        print 'BOXES'
        return json.dumps([
            {
                'name':'PCI Compliance',
                'alerts':'4',
                'components':[{
                    'name':'Questionnaire',
                    'alerts':'1'
                },
                {
                    'name':'Scans',
                    'alerts':'2'
                },
                {
                    'name':'PANscan',
                    'alerts':'1'
                }]
            },
            {
                'name':'Assurance',
                'alerts':'2',
                'components':[{
                    'name':'PANscan',
                    'alerts':''
                },
                {
                    'name':'Certificate',
                    'alerts':''
                },
                {
                    'name':'Claim',
                    'alerts':''
                },
                ]
            }
                
        ])


#URL HANDLING
root = Resource()
root.putChild('', MainResource())

js_resource = File('./static/js')
css_resource = File('./static/css')
img_resource = File('./static/img')

#STATIC STUFF
root.putChild('js', js_resource)
root.putChild('css', css_resource)
root.putChild('img', img_resource)

#stuff
root.putChild("myapps", Boxes())

factory = Site(root)
reactor.listenTCP(8989, factory)
reactor.run()

