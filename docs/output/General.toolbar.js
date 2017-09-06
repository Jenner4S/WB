Ext.data.JsonP.General_toolbar({"tagname":"class","name":"General.toolbar","autodetected":{},"files":[{"filename":"toolbar.js","href":"toolbar.html#General-toolbar"}],"members":[{"name":"createInstance","tagname":"cfg","owner":"General.toolbar","id":"cfg-createInstance","meta":{}},{"name":"isConfig","tagname":"cfg","owner":"General.toolbar","id":"cfg-isConfig","meta":{}},{"name":"normalName","tagname":"cfg","owner":"General.toolbar","id":"cfg-normalName","meta":{}},{"name":"popupMenu","tagname":"cfg","owner":"General.toolbar","id":"cfg-popupMenu","meta":{}},{"name":"tagConfigs","tagname":"cfg","owner":"General.toolbar","id":"cfg-tagConfigs","meta":{}},{"name":"tagEvents","tagname":"event","owner":"General.toolbar","id":"event-tagEvents","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-General.toolbar","short_doc":"工具条控件，在工具条下可以添加工具按钮，文本框和其他任意控件。 ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/toolbar.html#General-toolbar' target='_blank'>toolbar.js</a></div></pre><div class='doc-contents'><p>工具条控件，在工具条下可以添加工具按钮，文本框和其他任意控件。\n工具条可以设置到<a href=\"#!/api/General.panel\" rel=\"General.panel\" class=\"docClass\">General.panel</a>控件上的tbar/bbar等属性上，以作为面板的工具条。\n该控件封装了Ext.toolbar.Toolbar类，扩展属性在本文档中说明，其他属性请参考Ext JS文档说明。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-createInstance' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.toolbar'>General.toolbar</span><br/><a href='source/toolbar.html#General-toolbar-cfg-createInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.toolbar-cfg-createInstance' class='name expandable'>createInstance</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否创建对象的实例，如果设置为false只创建对象表达式。 ...</div><div class='long'><p>是否创建对象的实例，如果设置为false只创建对象表达式。</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-isConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.toolbar'>General.toolbar</span><br/><a href='source/toolbar.html#General-toolbar-cfg-isConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.toolbar-cfg-isConfig' class='name expandable'>isConfig</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>指定该控件是否作为父控件的配置项。true作为父控件的配置项，false作为父控件的子控件。 ...</div><div class='long'><p>指定该控件是否作为父控件的配置项。true作为父控件的配置项，false作为父控件的子控件。\n如果值为true，该控件的对象表达式将添加到父控件的以该控件itemId属性值为名称的属性下。</p>\n<p>Defaults to: <code>'auto'</code></p></div></div></div><div id='cfg-normalName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.toolbar'>General.toolbar</span><br/><a href='source/toolbar.html#General-toolbar-cfg-normalName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.toolbar-cfg-normalName' class='name expandable'>normalName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>在命名空间下指向该对象的变量名称，可以通过app.normalName访问该对象。 ...</div><div class='long'><p>在命名空间下指向该对象的变量名称，可以通过app.normalName访问该对象。\n如果该值为空，normalName取自itemId属性值。</p>\n</div></div></div><div id='cfg-popupMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.toolbar'>General.toolbar</span><br/><a href='source/toolbar.html#General-toolbar-cfg-popupMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.toolbar-cfg-popupMenu' class='name expandable'>popupMenu</a> : Ext.menu.Menu<span class=\"signature\"></span></div><div class='description'><div class='short'><p>设置该对象关联的上下文菜单，通常点击右键时弹出关联的菜单。</p>\n</div><div class='long'><p>设置该对象关联的上下文菜单，通常点击右键时弹出关联的菜单。</p>\n</div></div></div><div id='cfg-tagConfigs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.toolbar'>General.toolbar</span><br/><a href='source/toolbar.html#General-toolbar-cfg-tagConfigs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.toolbar-cfg-tagConfigs' class='name expandable'>tagConfigs</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>对象或任意的脚本添加到该控件的配置项中。如设置为{foo: 'bar'}将为该控件增加配置项foo，其值为bar。</p>\n</div><div class='long'><p>对象或任意的脚本添加到该控件的配置项中。如设置为{foo: 'bar'}将为该控件增加配置项foo，其值为bar。</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-tagEvents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.toolbar'>General.toolbar</span><br/><a href='source/toolbar.html#General-toolbar-event-tagEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.toolbar-event-tagEvents' class='name expandable'>tagEvents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>对象或任意的脚本添加到该控件的事件中。如设置为{destroy: app.destroyHandler}将为该控件增加destroy事件时执行app.destroyHandler方法。 ...</div><div class='long'><p>对象或任意的脚本添加到该控件的事件中。如设置为{destroy: app.destroyHandler}将为该控件增加destroy事件时执行app.destroyHandler方法。</p>\n</div></div></div></div></div></div></div>","meta":{}});