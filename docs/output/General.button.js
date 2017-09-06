Ext.data.JsonP.General_button({"tagname":"class","name":"General.button","autodetected":{},"files":[{"filename":"button.js","href":"button.html#General-button"}],"members":[{"name":"bindModule","tagname":"cfg","owner":"General.button","id":"cfg-bindModule","meta":{}},{"name":"createInstance","tagname":"cfg","owner":"General.button","id":"cfg-createInstance","meta":{}},{"name":"isConfig","tagname":"cfg","owner":"General.button","id":"cfg-isConfig","meta":{}},{"name":"menuType","tagname":"cfg","owner":"General.button","id":"cfg-menuType","meta":{}},{"name":"normalName","tagname":"cfg","owner":"General.button","id":"cfg-normalName","meta":{}},{"name":"tagConfigs","tagname":"cfg","owner":"General.button","id":"cfg-tagConfigs","meta":{}},{"name":"toolcallback","tagname":"cfg","owner":"General.button","id":"cfg-toolcallback","meta":{}},{"name":"tooltype","tagname":"cfg","owner":"General.button","id":"cfg-tooltype","meta":{}},{"name":"menubeforeshow","tagname":"event","owner":"General.button","id":"event-menubeforeshow","meta":{}},{"name":"menuclick","tagname":"event","owner":"General.button","id":"event-menuclick","meta":{}},{"name":"menuonshow","tagname":"event","owner":"General.button","id":"event-menuonshow","meta":{}},{"name":"menuselect","tagname":"event","owner":"General.button","id":"event-menuselect","meta":{}},{"name":"tagEvents","tagname":"event","owner":"General.button","id":"event-tagEvents","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-General.button","short_doc":"按钮控件，用于点击时执行代码。 ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/button.html#General-button' target='_blank'>button.js</a></div></pre><div class='doc-contents'><p>按钮控件，用于点击时执行代码。\n该控件封装了Ext.button.Button类，扩展属性在本文档中说明，其他属性请参考Ext JS文档说明。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-bindModule' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-cfg-bindModule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-cfg-bindModule' class='name expandable'>bindModule</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>当前用户如果不能访问该属性指定的模块，则该控件隐藏。</p>\n</div><div class='long'><p>当前用户如果不能访问该属性指定的模块，则该控件隐藏。</p>\n</div></div></div><div id='cfg-createInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-cfg-createInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-cfg-createInstance' class='name expandable'>createInstance</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否创建对象的实例，如果设置为false只创建对象表达式。 ...</div><div class='long'><p>是否创建对象的实例，如果设置为false只创建对象表达式。</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-isConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-cfg-isConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-cfg-isConfig' class='name expandable'>isConfig</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>指定该控件是否作为父控件的配置项。true作为父控件的配置项，false作为父控件的子控件。 ...</div><div class='long'><p>指定该控件是否作为父控件的配置项。true作为父控件的配置项，false作为父控件的子控件。\n如果值为true，该控件的对象表达式将添加到父控件的以该控件itemId属性值为名称的属性下。</p>\n<p>Defaults to: <code>'auto'</code></p></div></div></div><div id='cfg-menuType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-cfg-menuType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-cfg-menuType' class='name expandable'>menuType</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>当控件为菜单时指定菜单的xtype类型，可选项为colormenu和datemenu。</p>\n</div><div class='long'><p>当控件为菜单时指定菜单的xtype类型，可选项为colormenu和datemenu。</p>\n</div></div></div><div id='cfg-normalName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-cfg-normalName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-cfg-normalName' class='name expandable'>normalName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>在命名空间下指向该对象的变量名称，可以通过app.normalName访问该对象。 ...</div><div class='long'><p>在命名空间下指向该对象的变量名称，可以通过app.normalName访问该对象。\n如果该值为空，normalName取自itemId属性值。</p>\n</div></div></div><div id='cfg-tagConfigs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-cfg-tagConfigs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-cfg-tagConfigs' class='name expandable'>tagConfigs</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>对象或任意的脚本添加到该控件的配置项中。如设置为{foo: 'bar'}将为该控件增加配置项foo，其值为bar。</p>\n</div><div class='long'><p>对象或任意的脚本添加到该控件的配置项中。如设置为{foo: 'bar'}将为该控件增加配置项foo，其值为bar。</p>\n</div></div></div><div id='cfg-toolcallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-cfg-toolcallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-cfg-toolcallback' class='name expandable'>toolcallback</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>当控件为面板标题中的工具条按钮时，点击按钮执行的方法。见Ext.panel.Tool的callback属性。</p>\n</div><div class='long'><p>当控件为面板标题中的工具条按钮时，点击按钮执行的方法。见Ext.panel.Tool的callback属性。</p>\n</div></div></div><div id='cfg-tooltype' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-cfg-tooltype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-cfg-tooltype' class='name expandable'>tooltype</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>当控件为面板标题中的工具条按钮时，指定按钮的类型。见Ext.panel.Tool的type属性。</p>\n</div><div class='long'><p>当控件为面板标题中的工具条按钮时，指定按钮的类型。见Ext.panel.Tool的type属性。</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-menubeforeshow' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-event-menubeforeshow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-event-menubeforeshow' class='name expandable'>menubeforeshow</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>当控件为菜单时菜单显示之前触发的事件。见Ext.menu.Menu的beforeshow事件。 ...</div><div class='long'><p>当控件为菜单时菜单显示之前触发的事件。见Ext.menu.Menu的beforeshow事件。</p>\n</div></div></div><div id='event-menuclick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-event-menuclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-event-menuclick' class='name expandable'>menuclick</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>当控件为菜单时菜单项的点击事件。见Ext.menu.Menu的click事件。 ...</div><div class='long'><p>当控件为菜单时菜单项的点击事件。见Ext.menu.Menu的click事件。</p>\n</div></div></div><div id='event-menuonshow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-event-menuonshow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-event-menuonshow' class='name expandable'>menuonshow</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>当控件为菜单时菜单的显示事件。见Ext.menu.Menu的show事件。 ...</div><div class='long'><p>当控件为菜单时菜单的显示事件。见Ext.menu.Menu的show事件。</p>\n</div></div></div><div id='event-menuselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-event-menuselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-event-menuselect' class='name expandable'>menuselect</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>当控件为日期或颜色菜单时的菜单选择事件。见Ext.menu.DatePicker/Ext.menu.ColorPicker的select事件。 ...</div><div class='long'><p>当控件为日期或颜色菜单时的菜单选择事件。见Ext.menu.DatePicker/Ext.menu.ColorPicker的select事件。</p>\n</div></div></div><div id='event-tagEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='General.button'>General.button</span><br/><a href='source/button.html#General-button-event-tagEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/General.button-event-tagEvents' class='name expandable'>tagEvents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>对象或任意的脚本添加到该控件的事件中。如设置为{destroy: app.destroyHandler}将为该控件增加destroy事件时执行app.destroyHandler方法。 ...</div><div class='long'><p>对象或任意的脚本添加到该控件的事件中。如设置为{destroy: app.destroyHandler}将为该控件增加destroy事件时执行app.destroyHandler方法。</p>\n</div></div></div></div></div></div></div>","meta":{}});