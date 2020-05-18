# Output

```
marchofflprivat@Marcs-MBP catbox-open-handle % node open-handle.js
There are 2 handle(s) keeping the process running

# Timeout
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox-memory/lib/index.js:84  - this._timer = setTimeout(cleanup, timeout);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox-memory/lib/index.js:187 - this._scheduleCleanup(ttl);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox/lib/client.js:91        - await this.connection.set(key, value, ttl);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox/lib/policy.js:311       - await this._cache.set({ segment: this._segment, id: internals.id(key) }, value, ttl || internals.Policy.ttl(this.rule));

# Timeout
/Users/marchofflprivat/Workspace/catbox-open-handle/open-handle.js:25 - await new Promise((resolve) => setTimeout(resolve, 50));
/Users/marchofflprivat/Workspace/catbox-open-handle/open-handle.js:25 - await new Promise((resolve) => setTimeout(resolve, 50));
--------- After stoped cache ----------
There are 2 handle(s) keeping the process running

# Timeout
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox-memory/lib/index.js:84  - this._timer = setTimeout(cleanup, timeout);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox-memory/lib/index.js:187 - this._scheduleCleanup(ttl);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox/lib/client.js:91        - await this.connection.set(key, value, ttl);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox/lib/policy.js:311       - await this._cache.set({ segment: this._segment, id: internals.id(key) }, value, ttl || internals.Policy.ttl(this.rule));

# Timeout
/Users/marchofflprivat/Workspace/catbox-open-handle/open-handle.js:25 - await new Promise((resolve) => setTimeout(resolve, 50));
/Users/marchofflprivat/Workspace/catbox-open-handle/open-handle.js:25 - await new Promise((resolve) => setTimeout(resolve, 50));
--------- After another wait ----------
There are 2 handle(s) keeping the process running

# Timeout
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox-memory/lib/index.js:84  - this._timer = setTimeout(cleanup, timeout);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox-memory/lib/index.js:187 - this._scheduleCleanup(ttl);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox/lib/client.js:91        - await this.connection.set(key, value, ttl);
/Users/marchofflprivat/Workspace/catbox-open-handle/node_modules/@hapi/catbox/lib/policy.js:311       - await this._cache.set({ segment: this._segment, id: internals.id(key) }, value, ttl || internals.Policy.ttl(this.rule));

# Timeout
/Users/marchofflprivat/Workspace/catbox-open-handle/open-handle.js:25 - await new Promise((resolve) => setTimeout(resolve, 50));
/Users/marchofflprivat/Workspace/catbox-open-handle/open-handle.js:25 - await new Promise((resolve) => setTimeout(resolve, 50));
```
