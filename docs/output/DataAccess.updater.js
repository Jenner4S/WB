Ext.data.JsonP.DataAccess_updater({
			"tagname" : "class",
			"name" : "DataAccess.updater",
			"autodetected" : {},
			"files" : [ {
				"filename" : "updater.js",
				"href" : "updater.html#DataAccess-updater"
			} ],
			"members" : [ {
				"name" : "batchUpdate",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-batchUpdate",
				"meta" : {}
			}, {
				"name" : "disabled",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-disabled",
				"meta" : {}
			}, {
				"name" : "fieldsMap",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-fieldsMap",
				"meta" : {}
			}, {
				"name" : "ignoreBlob",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-ignoreBlob",
				"meta" : {}
			}, {
				"name" : "isolation",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-isolation",
				"meta" : {}
			}, {
				"name" : "itemId",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-itemId",
				"meta" : {}
			}, {
				"name" : "jndi",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-jndi",
				"meta" : {}
			}, {
				"name" : "mode",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-mode",
				"meta" : {}
			}, {
				"name" : "paramDelete",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-paramDelete",
				"meta" : {}
			}, {
				"name" : "paramInsert",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-paramInsert",
				"meta" : {}
			}, {
				"name" : "paramUpdate",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-paramUpdate",
				"meta" : {}
			}, {
				"name" : "sqlDelete",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-sqlDelete",
				"meta" : {}
			}, {
				"name" : "sqlInsert",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-sqlInsert",
				"meta" : {}
			}, {
				"name" : "sqlUpdate",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-sqlUpdate",
				"meta" : {}
			}, {
				"name" : "tableName",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-tableName",
				"meta" : {}
			}, {
				"name" : "transaction",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-transaction",
				"meta" : {}
			}, {
				"name" : "type",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-type",
				"meta" : {}
			}, {
				"name" : "uniqueUpdate",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-uniqueUpdate",
				"meta" : {}
			}, {
				"name" : "useExistFields",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-useExistFields",
				"meta" : {}
			}, {
				"name" : "whereFields",
				"tagname" : "cfg",
				"owner" : "DataAccess.updater",
				"id" : "cfg-whereFields",
				"meta" : {}
			} ],
			"alternateClassNames" : [],
			"aliases" : {},
			"id" : "class-DataAccess.updater",
			"short_doc" : "根据前台传递的数据自动生成指定的SQL语句并执行的控件。 ...",
			"component" : false,
			"superclasses" : [],
			"subclasses" : [],
			"mixedInto" : [],
			"mixins" : [],
			"parentMixins" : [],
			"requires" : [],
			"uses" : [],
			"html" : "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/updater.html#DataAccess-updater' target='_blank'>updater.js</a></div></pre><div class='doc-contents'><p>根据前台传递的数据自动生成指定的SQL语句并执行的控件。\n在ServerScript中可以使用app.update方法完成相同的功能。\n下面举例说明该控件的工作原理：</p>\n\n<h1>数据库表结构</h1>\n\n<p>假设数据库中存在表DEMO，其结构如下：</p>\n\n<table>\n<tr><td>字段</td><td>类型</td></tr>\n<tr><td>F1</td><td>字符型</td></tr>\n<tr><td>F2</td><td>数字型</td></tr>\n</table>\n\n\n<h1>批量更新指定表的数据</h1>\n\n<p>假设前台提交以下3个参数，其名称和值分别为：</p>\n\n<pre><code>destroy:[{\"F1\":\"abc\",\"F2\":123,\"#F1\":\"abc\",\"#F2\":123}]\nupdate:[{\"F1\":\"defx\",\"F2\":4567,\"#F1\":\"def\",\"#F2\":456}]\ncreate:[{\"F1\":\"hij\",\"F2\":789},{\"F1\":\"lmn\",\"F2\":215}]\n</code></pre>\n\n<p>各个参数值均为数组，数组内可包含多条记录。其中字段名称前带“#”符号的表示字段的原始值。\n使用updater批量更新数据时，只需设置控件tableName属性为demo，控件即可根据上述参数自动生成insert, update和delete语句以更新该表的数据。\n首先如果存在destroy参数，控件自动生成delete语句，删除destroy参数指定列表数据的记录。\n其次如果存在update参数，控件自动生成update语句，更新update参数指定列表数据的记录。\n最后如果存在create参数，控件自动生成insert语句，添加create参数指定列表数据的记录。\n所有操作默认均在一个事务内处理。</p>\n\n<h1>执行指定类型的更新</h1>\n\n<p>假设前台提交以下4个参数，其名称和值分别为：</p>\n\n<pre><code>F1: 'abcd'\nF2: 1234\n#F1: 'abc'\n#F2: 123\n</code></pre>\n\n<p>使用updater更新数据，只需设置控件tableName属性为demo，mode属性为update，即可生成update语句，生成的语句通常等效如下SQL：</p>\n\n<pre><code>update demo set F1='abcd', F2=1234 where F1='abc' and F2=123\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-batchUpdate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-batchUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-batchUpdate' class='name expandable'>batchUpdate</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否使用数据库内置的批处理功能处理批量更新的数据。 ...</div><div class='long'><p>是否使用数据库内置的批处理功能处理批量更新的数据。\ntrue使用数据库内置的批处理功能，false使用循环执行SQL语句。\n如果使用batchUpdate，uniqueUpdate属性将无效。</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-disabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-disabled' class='name expandable'>disabled</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否禁用该控件。 ...</div><div class='long'><p>是否禁用该控件。</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-fieldsMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-fieldsMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-fieldsMap' class='name expandable'>fieldsMap</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>字段名称和参数名称对照对象。当字段名称和参数名称不一致时可以使用此属性来设置。 ...</div><div class='long'><p>字段名称和参数名称对照对象。当字段名称和参数名称不一致时可以使用此属性来设置。\n例如表DEMO存在字段F1和F2，当前台提交的参数名称为V1和V2时，可以通过以下设置来指定对应关系。</p>\n\n<pre><code>{F1: 'V1', F2: 'V2'}\n</code></pre>\n</div></div></div><div id='cfg-ignoreBlob' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-ignoreBlob' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-ignoreBlob' class='name expandable'>ignoreBlob</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否忽略对二进制字段的处理。该属性通常用于指定mode的数据更新。 ...</div><div class='long'><p>是否忽略对二进制字段的处理。该属性通常用于指定mode的数据更新。</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-isolation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-isolation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-isolation' class='name expandable'>isolation</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>如果启用事务指定事务的隔离程度。有效值为readCommitted, readUncommitted, repeatableRead和serializable。</p>\n</div><div class='long'><p>如果启用事务指定事务的隔离程度。有效值为readCommitted, readUncommitted, repeatableRead和serializable。</p>\n</div></div></div><div id='cfg-itemId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-itemId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-itemId' class='name expandable'>itemId</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>用以标识控件的名称。</p>\n</div><div class='long'><p>用以标识控件的名称。</p>\n</div></div></div><div id='cfg-jndi' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-jndi' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-jndi' class='name expandable'>jndi</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>数据库连接jndi变量名称。变量名称在变量配置模块sys.jndi目录内预定义，其值为jndi全名。</p>\n</div><div class='long'><p>数据库连接jndi变量名称。变量名称在变量配置模块sys.jndi目录内预定义，其值为jndi全名。</p>\n</div></div></div><div id='cfg-mode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-mode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-mode' class='name expandable'>mode</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>数据更新的类型。如果设置此属性，则只执行指定类型的更新，其数据不再由create, update和destroy参数指定，而是取自全部参数。 ...</div><div class='long'><p>数据更新的类型。如果设置此属性，则只执行指定类型的更新，其数据不再由create, update和destroy参数指定，而是取自全部参数。\n如果未设置此属性，将根据create, update和destroy参数执行对应的批量更新。其有效值为：</p>\n\n<pre><code>insert：生成对应的insert语句，执行添加数据操作。\nupdate：生成对应的update语句，执行更新数据操作。\ndelete：生成对应的delete语句，执行删除数据操作。\n</code></pre>\n</div></div></div><div id='cfg-paramDelete' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-paramDelete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-paramDelete' class='name expandable'>paramDelete</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>删除数据源参数名称。仅适用于批量更新，即未指定mode的数据更新。 ...</div><div class='long'><p>删除数据源参数名称。仅适用于批量更新，即未指定mode的数据更新。</p>\n<p>Defaults to: <code>'destroy'</code></p></div></div></div><div id='cfg-paramInsert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-paramInsert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-paramInsert' class='name expandable'>paramInsert</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>添加数据源参数名称。仅适用于批量更新，即未指定mode的数据更新。 ...</div><div class='long'><p>添加数据源参数名称。仅适用于批量更新，即未指定mode的数据更新。</p>\n<p>Defaults to: <code>'create'</code></p></div></div></div><div id='cfg-paramUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-paramUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-paramUpdate' class='name expandable'>paramUpdate</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>更新数据源参数名称。仅适用于批量更新，即未指定mode的数据更新。 ...</div><div class='long'><p>更新数据源参数名称。仅适用于批量更新，即未指定mode的数据更新。</p>\n<p>Defaults to: <code>'update'</code></p></div></div></div><div id='cfg-sqlDelete' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-sqlDelete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-sqlDelete' class='name expandable'>sqlDelete</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>指定delete SQL语句，用以替代系统自动生成的SQL语句。设置为“-”表示不则行delete语句。</p>\n</div><div class='long'><p>指定delete SQL语句，用以替代系统自动生成的SQL语句。设置为“-”表示不则行delete语句。</p>\n</div></div></div><div id='cfg-sqlInsert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-sqlInsert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-sqlInsert' class='name expandable'>sqlInsert</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>指定insert SQL语句，用以替代系统自动生成的SQL语句。设置为“-”表示不则行insert语句。</p>\n</div><div class='long'><p>指定insert SQL语句，用以替代系统自动生成的SQL语句。设置为“-”表示不则行insert语句。</p>\n</div></div></div><div id='cfg-sqlUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-sqlUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-sqlUpdate' class='name expandable'>sqlUpdate</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>指定update SQL语句，用以替代系统自动生成的SQL语句。设置为“-”表示不则行update语句。</p>\n</div><div class='long'><p>指定update SQL语句，用以替代系统自动生成的SQL语句。设置为“-”表示不则行update语句。</p>\n</div></div></div><div id='cfg-tableName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-tableName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-tableName' class='name expandable'>tableName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>需要更新的实体表名称。所有自动生成的SQL语句均基于该表。</p>\n</div><div class='long'><p>需要更新的实体表名称。所有自动生成的SQL语句均基于该表。</p>\n</div></div></div><div id='cfg-transaction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-transaction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-transaction' class='name expandable'>transaction</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>是否启用或提交数据库事务。有效值为：\n\nstart：开始当前请求默认使用的数据库连接的事务，如果事务已经启用，将先提交之前的事务并开始新的事务。 ...</div><div class='long'><p>是否启用或提交数据库事务。有效值为：</p>\n\n<pre><code>start：开始当前请求默认使用的数据库连接的事务，如果事务已经启用，将先提交之前的事务并开始新的事务。\ncommit：如果之前已经启用事务，将在SQL执行完成后提交事务。如果之前未启用事务，将开始事务并执行SQL，然后提交事务。\nnone：不执行任何操作。\n</code></pre>\n<p>Defaults to: <code>'start'</code></p></div></div></div><div id='cfg-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-type' class='name expandable'>type</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>执行SQL语句使用的方法类型。有效值为：\n\nquery：使用executeQuery方法执行SQL语句。 ...</div><div class='long'><p>执行SQL语句使用的方法类型。有效值为：</p>\n\n<pre><code>query：使用executeQuery方法执行SQL语句。\nupdate：使用executeUpdate方法执行SQL语句。如果使用批处理，将使用此方法。\nexecute：使用execute方法执行SQL语句。如果未指定该属性且不使用\"{}\"语法，默认使用此方法。\ncall：使用execute方法执行SQL语句，并创建CallableStatement对象。如果SQL语句使用\"{}\"语法执行SQL，默认使用此方法。\n</code></pre>\n\n<p>默认为自动选择。</p>\n</div></div></div><div id='cfg-uniqueUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-uniqueUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-uniqueUpdate' class='name expandable'>uniqueUpdate</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>指定是否在执行insert, update或delete等返回影响记录数的语句时，是否返回值必须为1。 ...</div><div class='long'><p>指定是否在执行insert, update或delete等返回影响记录数的语句时，是否返回值必须为1。\n如果指定该属性为true，那么返回值必须为1，如果返回值不为1将抛出“记录更新不唯一”的异常。\n设置此属性可保证数据库更新记录的唯一性。</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-useExistFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-useExistFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-useExistFields' class='name expandable'>useExistFields</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>自动生成的SQL语句中的字段是否只使用存在参数值的字段。例如表DEMO存在字段F1, F2和F3共3个字段，但提交的参数中只包含F1和F2。 ...</div><div class='long'><p>自动生成的SQL语句中的字段是否只使用存在参数值的字段。例如表DEMO存在字段F1, F2和F3共3个字段，但提交的参数中只包含F1和F2。\n如果设置此值为true，F3字段将在自动生成的SQL语句中被排除。</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-whereFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.updater'>DataAccess.updater</span><br/><a href='source/updater.html#DataAccess-updater-cfg-whereFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.updater-cfg-whereFields' class='name expandable'>whereFields</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>自动生成的SQL语句where部分表达式使用的以逗号分隔的字段列表。如果未设置此值将使用所有有效的字段组成where表达式。 ...</div><div class='long'><p>自动生成的SQL语句where部分表达式使用的以逗号分隔的字段列表。如果未设置此值将使用所有有效的字段组成where表达式。\n可以通过设置此属性来指定自动生成的where表达式所使用的字段。例如可以设置为主键字段，则where表达式仅包含该主键字段。</p>\n</div></div></div></div></div></div></div>",
			"meta" : {}
		});