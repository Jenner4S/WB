Ext.data.JsonP.DataAccess_query({"tagname":"class","name":"DataAccess.query","autodetected":{},"files":[{"filename":"query.js","href":"query.html#DataAccess-query"}],"members":[{"name":"arrayName","tagname":"cfg","owner":"DataAccess.query","id":"cfg-arrayName","meta":{}},{"name":"batchUpdate","tagname":"cfg","owner":"DataAccess.query","id":"cfg-batchUpdate","meta":{}},{"name":"disabled","tagname":"cfg","owner":"DataAccess.query","id":"cfg-disabled","meta":{}},{"name":"errorText","tagname":"cfg","owner":"DataAccess.query","id":"cfg-errorText","meta":{}},{"name":"isolation","tagname":"cfg","owner":"DataAccess.query","id":"cfg-isolation","meta":{}},{"name":"itemId","tagname":"cfg","owner":"DataAccess.query","id":"cfg-itemId","meta":{}},{"name":"jndi","tagname":"cfg","owner":"DataAccess.query","id":"cfg-jndi","meta":{}},{"name":"loadData","tagname":"cfg","owner":"DataAccess.query","id":"cfg-loadData","meta":{}},{"name":"sql","tagname":"cfg","owner":"DataAccess.query","id":"cfg-sql","meta":{}},{"name":"transaction","tagname":"cfg","owner":"DataAccess.query","id":"cfg-transaction","meta":{}},{"name":"type","tagname":"cfg","owner":"DataAccess.query","id":"cfg-type","meta":{}},{"name":"uniqueUpdate","tagname":"cfg","owner":"DataAccess.query","id":"cfg-uniqueUpdate","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-DataAccess.query","short_doc":"数据库SQL访问控件，用于执行任意的SQL语句，包括对存储过程和函数的访问。 ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/query.html#DataAccess-query' target='_blank'>query.js</a></div></pre><div class='doc-contents'><p>数据库SQL访问控件，用于执行任意的SQL语句，包括对存储过程和函数的访问。\n该控件区别于<a href=\"#!/api/DataAccess.dataprovider\" rel=\"DataAccess.dataprovider\" class=\"docClass\">DataAccess.dataprovider</a>控件，只执行SQL而不输出任何结果。\n该控件执行后，其返回结果和输出参数存储在HttpServletRequest对象的attribute中。\n在ServerScript中可以使用app.run方法完成相同的功能。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-arrayName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-arrayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-arrayName' class='name expandable'>arrayName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>用于批处理的前台提交的参数名称。如果指定该名称，系统将取该名称的参数值，并把值转换为数组，作为批处理的数据源。 ...</div><div class='long'><p>用于批处理的前台提交的参数名称。如果指定该名称，系统将取该名称的参数值，并把值转换为数组，作为批处理的数据源。\n参数值的数据格式如下：</p>\n\n<pre><code>[{field1:'foo',field2:123},{field1:'abc',field2:456}]\n</code></pre>\n\n<p>使用此属性可以方便地完成SQL的批处理，完成批量数据的增删改。</p>\n</div></div></div><div id='cfg-batchUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-batchUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-batchUpdate' class='name expandable'>batchUpdate</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否使用数据库内置的批处理功能处理arrayName指定的批数据。 ...</div><div class='long'><p>是否使用数据库内置的批处理功能处理arrayName指定的批数据。\ntrue使用数据库内置的批处理功能，false使用循环执行SQL语句。\n如果使用batchUpdate，uniqueUpdate属性将无效。</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-disabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-disabled' class='name expandable'>disabled</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否禁用该控件。 ...</div><div class='long'><p>是否禁用该控件。</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-errorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-errorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-errorText' class='name expandable'>errorText</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>如果指定该值且查询结果集不为空，系统将抛出该信息的异常。</p>\n</div><div class='long'><p>如果指定该值且查询结果集不为空，系统将抛出该信息的异常。</p>\n</div></div></div><div id='cfg-isolation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-isolation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-isolation' class='name expandable'>isolation</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>如果启用事务指定事务的隔离程度。有效值为readCommitted, readUncommitted, repeatableRead和serializable。</p>\n</div><div class='long'><p>如果启用事务指定事务的隔离程度。有效值为readCommitted, readUncommitted, repeatableRead和serializable。</p>\n</div></div></div><div id='cfg-itemId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-itemId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-itemId' class='name expandable'>itemId</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>用以标识控件的名称。</p>\n</div><div class='long'><p>用以标识控件的名称。</p>\n</div></div></div><div id='cfg-jndi' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-jndi' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-jndi' class='name expandable'>jndi</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>数据库连接jndi变量名称。变量名称在变量配置模块sys.jndi目录内预定义，其值为jndi全名。</p>\n</div><div class='long'><p>数据库连接jndi变量名称。变量名称在变量配置模块sys.jndi目录内预定义，其值为jndi全名。</p>\n</div></div></div><div id='cfg-loadData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-loadData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-loadData' class='name expandable'>loadData</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否读取SQL生成的结果集首行所有字段数据，并存储至HttpServletRequest的attribute。 ...</div><div class='long'><p>是否读取SQL生成的结果集首行所有字段数据，并存储至HttpServletRequest的attribute。\n存储的属性名称为[itemId.字段名称]，属性值为字段值。</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-sql' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-sql' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-sql' class='name expandable'>sql</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>执行的SQL语句。SQL语句可以为任意有效的SQL语句，包括对存储过程或函数访问的SQL。</p>\n</div><div class='long'><p>执行的SQL语句。SQL语句可以为任意有效的SQL语句，包括对存储过程或函数访问的SQL。</p>\n</div></div></div><div id='cfg-transaction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-transaction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-transaction' class='name expandable'>transaction</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>是否启用或提交数据库事务。有效值为：\n\nstart：开始当前请求默认使用的数据库连接的事务，如果事务已经启用，将先提交之前的事务并开始新的事务。 ...</div><div class='long'><p>是否启用或提交数据库事务。有效值为：</p>\n\n<pre><code>start：开始当前请求默认使用的数据库连接的事务，如果事务已经启用，将先提交之前的事务并开始新的事务。\ncommit：如果之前已经启用事务，将在SQL执行完成后提交事务。如果之前未启用事务，将开始事务并执行SQL，然后提交事务。\nnone：不执行任何操作。\n</code></pre>\n\n<p>如果未指定该值并且uniqueUpdate属性为true或arrayName属性不为空，默认为'start'。</p>\n</div></div></div><div id='cfg-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-type' class='name expandable'>type</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>执行SQL语句使用的方法类型。有效值为：\n\nquery：使用executeQuery方法执行SQL语句。 ...</div><div class='long'><p>执行SQL语句使用的方法类型。有效值为：</p>\n\n<pre><code>query：使用executeQuery方法执行SQL语句。\nupdate：使用executeUpdate方法执行SQL语句。如果使用批处理，将使用此方法。\nexecute：使用execute方法执行SQL语句。如果未指定该属性且不使用\"{}\"语法，默认使用此方法。\ncall：使用execute方法执行SQL语句，并创建CallableStatement对象。如果SQL语句使用\"{}\"语法执行SQL，默认使用此方法。\n</code></pre>\n\n<p>默认为自动选择。</p>\n</div></div></div><div id='cfg-uniqueUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataAccess.query'>DataAccess.query</span><br/><a href='source/query.html#DataAccess-query-cfg-uniqueUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataAccess.query-cfg-uniqueUpdate' class='name expandable'>uniqueUpdate</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>指定是否在执行insert, update或delete等返回影响记录数的语句时，是否返回值必须为1。 ...</div><div class='long'><p>指定是否在执行insert, update或delete等返回影响记录数的语句时，是否返回值必须为1。\n如果指定该属性为true，那么返回值必须为1，如果返回值不为1将抛出“记录更新不唯一”的异常。\n设置此属性可保证数据库更新记录的唯一性。</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div></div></div>","meta":{}});