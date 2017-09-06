Ext.data.JsonP
		.ServerScript_app({
			"tagname" : "class",
			"name" : "ServerScript.app",
			"autodetected" : {},
			"files" : [ {
				"filename" : "app.js",
				"href" : "app.html#ServerScript-app"
			} ],
			"members" : [ {
				"name" : "error",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-error",
				"meta" : {}
			}, {
				"name" : "execute",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-execute",
				"meta" : {}
			}, {
				"name" : "format",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-format",
				"meta" : {}
			}, {
				"name" : "get",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-get",
				"meta" : {}
			}, {
				"name" : "getBool",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-getBool",
				"meta" : {}
			}, {
				"name" : "getData",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-getData",
				"meta" : {}
			}, {
				"name" : "getDate",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-getDate",
				"meta" : {}
			}, {
				"name" : "getFiles",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-getFiles",
				"meta" : {}
			}, {
				"name" : "getFloat",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-getFloat",
				"meta" : {}
			}, {
				"name" : "getInt",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-getInt",
				"meta" : {}
			}, {
				"name" : "getJavaDate",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-getJavaDate",
				"meta" : {}
			}, {
				"name" : "getLang",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-getLang",
				"meta" : {}
			}, {
				"name" : "has",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-has",
				"meta" : {}
			}, {
				"name" : "info",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-info",
				"meta" : {}
			}, {
				"name" : "log",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-log",
				"meta" : {}
			}, {
				"name" : "output",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-output",
				"meta" : {}
			}, {
				"name" : "perm",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-perm",
				"meta" : {}
			}, {
				"name" : "run",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-run",
				"meta" : {}
			}, {
				"name" : "send",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-send",
				"meta" : {}
			}, {
				"name" : "set",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-set",
				"meta" : {}
			}, {
				"name" : "update",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-update",
				"meta" : {}
			}, {
				"name" : "warn",
				"tagname" : "method",
				"owner" : "ServerScript.app",
				"id" : "method-warn",
				"meta" : {}
			} ],
			"alternateClassNames" : [],
			"aliases" : {},
			"id" : "class-ServerScript.app",
			"component" : false,
			"superclasses" : [],
			"subclasses" : [],
			"mixedInto" : [],
			"mixins" : [],
			"parentMixins" : [],
			"requires" : [],
			"uses" : [],
			"html" : "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/app.html#ServerScript-app' target='_blank'>app.js</a></div></pre><div class='doc-contents'><p>ServerScript app是HttpServletRequest和HttpServletResponse关联的服务器端的JavaScript方法库。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-error' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-error' class='name expandable'>error</a>( <span class='pre'>object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>向当前用户的浏览器控制台中输出指定对象的错误信息。 ...</div><div class='long'><p>向当前用户的浏览器控制台中输出指定对象的错误信息。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>打印的对象。</p>\n</div></li></ul></div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-execute' class='name expandable'>execute</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>在模块内运行另外一个模块。主模块和子模块将共享request和response。 ...</div><div class='long'><p>在模块内运行另外一个模块。主模块和子模块将共享request和response。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : Object<div class='sub-desc'><p>运行的模块url地址。</p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-format' class='name expandable'>format</a>( <span class='pre'>format, values</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>根据当前语言种类格式化字符串。 ...</div><div class='long'><p>根据当前语言种类格式化字符串。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : String<div class='sub-desc'><p>模板字符串。</p>\n</div></li><li><span class='pre'>values</span> : String...<div class='sub-desc'><p>格式化填充的字符串内容列表。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>格式化后的字符串。</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-get' class='name expandable'>get</a>( <span class='pre'>[name], [returnString]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>获取HttpServletRequest和HttpSession对象中指定名称的属性或参数。 ...</div><div class='long'><p>获取HttpServletRequest和HttpSession对象中指定名称的属性或参数。\n如果相同名称的属性或参数都存在则返回优先顺序最高的值。优先顺序依次为\nHttpSession的attribute，HttpServletRequest的attribute和\nHttpServletRequest的parameter。如果都不存在则返回null。\n如果name参数缺省，将返回所有值组成的对象。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>参数或属性或称。</p>\n</div></li><li><span class='pre'>returnString</span> : Boolean (optional)<div class='sub-desc'><p>如果获取单个参数，false返回原始对象值，true返回原始对象转换为字符串后的值。默认为false。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>请求对象的parameter和attribute中的值组成的对象。</p>\n</div></li></ul></div></div></div><div id='method-getBool' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-getBool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-getBool' class='name expandable'>getBool</a>( <span class='pre'>name</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>获取指定名称的参数，并转换为布尔类型。 ...</div><div class='long'><p>获取指定名称的参数，并转换为布尔类型。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>参数名称。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>参数转换后的布尔值。</p>\n</div></li></ul></div></div></div><div id='method-getData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-getData' class='name expandable'>getData</a>( <span class='pre'>sql, [config]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>获取由SQL生成的数据对象。详见app.output方法的说明。 ...</div><div class='long'><p>获取由SQL生成的数据对象。详见app.output方法的说明。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sql</span> : String<div class='sub-desc'><p>sql语句。</p>\n</div></li><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>配置参数对象，见DataProvider控件的使用。\n         &amp; @return {Object} 数据对象。</p>\n</div></li></ul></div></div></div><div id='method-getDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-getDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-getDate' class='name expandable'>getDate</a>( <span class='pre'>name</span> ) : Date<span class=\"signature\"></span></div><div class='description'><div class='short'>获取指定名称的参数，并转换为日期类型。参数必须为有效日期格式的字符串。 ...</div><div class='long'><p>获取指定名称的参数，并转换为日期类型。参数必须为有效日期格式的字符串。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>参数名称。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>参数转换后的日期值。</p>\n</div></li></ul></div></div></div><div id='method-getFiles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-getFiles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-getFiles' class='name expandable'>getFiles</a>( <span class='pre'>fieldName</span> ) : Object[]<span class=\"signature\"></span></div><div class='description'><div class='short'>获取指定文件控件的单个或多个文件。 ...</div><div class='long'><p>获取指定文件控件的单个或多个文件。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fieldName</span> : String<div class='sub-desc'><p>文件控件名称。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>获取的文件数据[{stream:输入流,name:文件名称,size:文件长度},...]，如果未找到返回空数组。</p>\n</div></li></ul></div></div></div><div id='method-getFloat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-getFloat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-getFloat' class='name expandable'>getFloat</a>( <span class='pre'>name</span> ) : Double<span class=\"signature\"></span></div><div class='description'><div class='short'>获取指定名称的参数，并转换为浮点数类型。 ...</div><div class='long'><p>获取指定名称的参数，并转换为浮点数类型。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>参数名称。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Double</span><div class='sub-desc'><p>参数转换后的浮点值。</p>\n</div></li></ul></div></div></div><div id='method-getInt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-getInt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-getInt' class='name expandable'>getInt</a>( <span class='pre'>name</span> ) : Integer<span class=\"signature\"></span></div><div class='description'><div class='short'>获取指定名称的参数，并转换为整数类型。 ...</div><div class='long'><p>获取指定名称的参数，并转换为整数类型。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>参数名称。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Integer</span><div class='sub-desc'><p>参数转换后的整数值。</p>\n</div></li></ul></div></div></div><div id='method-getJavaDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-getJavaDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-getJavaDate' class='name expandable'>getJavaDate</a>( <span class='pre'>name</span> ) : Date<span class=\"signature\"></span></div><div class='description'><div class='short'>获取指定名称的参数，并转换为日期类型。参数必须为有效日期格式的字符串。 ...</div><div class='long'><p>获取指定名称的参数，并转换为日期类型。参数必须为有效日期格式的字符串。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>参数名称。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>参数转换后的日期值。</p>\n</div></li></ul></div></div></div><div id='method-getLang' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-getLang' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-getLang' class='name expandable'>getLang</a>( <span class='pre'>langs</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>根据Str.lang为当前语言代码，获取langs中对应值组成的对象。 ...</div><div class='long'><p>根据Str.lang为当前语言代码，获取langs中对应值组成的对象。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>langs</span> : Object<div class='sub-desc'><p>按不同语言定义的值对象。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>根据当前语言提取值后组成的对象。</p>\n</div></li></ul></div></div></div><div id='method-has' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-has' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-has' class='name expandable'>has</a>( <span class='pre'>name</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>判断指定参数是否不为空。参数是指存储在session的attribute，request的attribute或parameter中的值。 ...</div><div class='long'><p>判断指定参数是否不为空。参数是指存储在session的attribute，request的attribute或parameter中的值。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>参数名称。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>如果参数存在且其值不为空则返回true，否则返回false。</p>\n</div></li></ul></div></div></div><div id='method-info' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-info' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-info' class='name expandable'>info</a>( <span class='pre'>object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>向当前用户的浏览器控制台中输出指定对象的提示信息。 ...</div><div class='long'><p>向当前用户的浏览器控制台中输出指定对象的提示信息。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>打印的对象。</p>\n</div></li></ul></div></div></div><div id='method-log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-log' class='name expandable'>log</a>( <span class='pre'>object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>向当前用户的浏览器控制台中输出指定对象的日志信息。 ...</div><div class='long'><p>向当前用户的浏览器控制台中输出指定对象的日志信息。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>打印的对象。</p>\n</div></li></ul></div></div></div><div id='method-output' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-output' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-output' class='name expandable'>output</a>( <span class='pre'>sql, [config], [returnScript]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>从数据库获取数据，并输出指定格式的脚本、图片或流数据至客户端。 ...</div><div class='long'><p>从数据库获取数据，并输出指定格式的脚本、图片或流数据至客户端。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sql</span> : String<div class='sub-desc'><p>sql语句。</p>\n</div></li><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>配置参数对象，见DataProvider控件的使用。</p>\n</div></li><li><span class='pre'>returnScript</span> : Boolean (optional)<div class='sub-desc'><p>是否返回脚本，true返回生成的脚本，false直接输出，默认为false。\n         &amp; @return {String/undefined} 输出脚本或undefined。</p>\n</div></li></ul></div></div></div><div id='method-perm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-perm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-perm' class='name expandable'>perm</a>( <span class='pre'>path</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>判断当前请求对指定模块是否可以访问。 ...</div><div class='long'><p>判断当前请求对指定模块是否可以访问。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : String<div class='sub-desc'><p>模块路径或其捷径。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true可以访问，false不可以访问。</p>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-run' class='name expandable'>run</a>( <span class='pre'>sql, [config]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>运行SQL语句，并获取返回结果对象。 ...</div><div class='long'><p>运行SQL语句，并获取返回结果对象。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sql</span> : String<div class='sub-desc'><p>运行的SQL语句。</p>\n</div></li><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>配置对象。</p>\n<ul><li><span class='pre'>jndi</span> : String<div class='sub-desc'><p>数据库连接jndi。</p>\n</div></li><li><span class='pre'>arrayName</span> : String<div class='sub-desc'><p>执行批处理时，指定数据源来自request中存储的该变量。</p>\n</div></li><li><span class='pre'>arrayData</span> : JSONArray/Array/String<div class='sub-desc'><p>执行批处理时，指定数据源来自该值。</p>\n</div></li><li><span class='pre'>batchUpdate</span> : Boolean<div class='sub-desc'><p>是否允许批处理操作。</p>\n</div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>执行何种SQL操作，可为\"query\",\"update\",\"execute\",\"call\"，默认为自动。</p>\n</div></li><li><span class='pre'>transaction</span> : String<div class='sub-desc'><p>执行何种数据库事务操作，可为\"start\",\"commit\",\"none\"。</p>\n</div></li><li><span class='pre'>isolation</span> : String<div class='sub-desc'><p>数据库事务隔离级别，可为\"readCommitted\",\"readUncommitted\",\"repeatableRead\",\"serializable\"。</p>\n</div></li><li><span class='pre'>uniqueUpdate</span> : Boolean<div class='sub-desc'><p>指定插入、更改或删除记录操作是否有且只有1条。</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>运行SQL语句获得的结果，可能值为结果集，影响记录数或输出参数结果Map。</p>\n</div></li></ul></div></div></div><div id='method-send' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-send' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-send' class='name expandable'>send</a>( <span class='pre'>object, [successful]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>向当前用户的客户端发送指定对象。 ...</div><div class='long'><p>向当前用户的客户端发送指定对象。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>发送的对象。</p>\n</div></li><li><span class='pre'>successful</span> : Boolean (optional)<div class='sub-desc'><p>是否成功标识。如果指定该参数将采用JSON格式封装，该模式仅适用于文件上传模式的数据发送。</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-set' class='name expandable'>set</a>( <span class='pre'>object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>遍历对象，并把对象中每个条目的值设置到request的attribute对象，attribute名称为对象中条目的名称。 ...</div><div class='long'><p>遍历对象，并把对象中每个条目的值设置到request的attribute对象，attribute名称为对象中条目的名称。\n如果首个参数不是对象，将以第1个参数为名称，第2个参数为值，设置到attribute。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>设置的对象。</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-update' class='name expandable'>update</a>( <span class='pre'>config</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>执行上下文绑定的insert, update, delete数据库更新操作。 ...</div><div class='long'><p>执行上下文绑定的insert, update, delete数据库更新操作。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>配置参数对象，见Updater控件的使用。</p>\n</div></li></ul></div></div></div><div id='method-warn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerScript.app'>ServerScript.app</span><br/><a href='source/app.html#ServerScript-app-method-warn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerScript.app-method-warn' class='name expandable'>warn</a>( <span class='pre'>request, object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>向当前用户的浏览器控制台中输出指定对象的警告信息。 ...</div><div class='long'><p>向当前用户的浏览器控制台中输出指定对象的警告信息。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : HttpServletRequest<div class='sub-desc'><p>请求对象。该请求对象用于关联到对应用户。</p>\n</div></li><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>打印的对象。</p>\n</div></li></ul></div></div></div></div></div></div></div>",
			"meta" : {}
		});