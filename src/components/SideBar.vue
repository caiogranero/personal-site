<template>
	<div id="sidebar">
		<div id="content">
			<b-row id="logo">
				<b-col md="12">
					<router-link to="/">
						<img src="./../assets/logo.png">
					</router-link>
				</b-col>
			</b-row>

			<b-row v-for="(route, index) in routes" :key="index" :class="route.class">
				<b-col md="12">
					<router-link :to="route.path">
						<i :class="`fas ${route.icon} fa-2x`" style="color: rgb(228, 228, 228)"></i>
					</router-link>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      routes: [
        {
          path: "/user",
          icon: "fa-user-friends",
          class: "route"
        }
      ]
    };
  },

  created() {
    this.setCurrentRoute(this.$route);
  },

  methods: {
    setCurrentRoute(route) {
      this.routes
        .filter(r => r.path === route.path)
        .map(r => (r.class = "route current-route"));
      this.routes
        .filter(r => r.path !== route.path)
        .map(r => (r.class = "route"));
    }
  },

  watch: {
    $route(to) {
      this.setCurrentRoute(to);
    }
  }
};
</script>

<style>
#sidebar {
  height: 100%;
  background-color: #2f323a;
}

#logo {
  margin-bottom: 70px;
}

#logo img {
  height: 50px;
}

#content {
  padding-top: 20px;
  padding-bottom: 20px;
}

.current-route {
  background-color: #5093e1;
}

.route {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
