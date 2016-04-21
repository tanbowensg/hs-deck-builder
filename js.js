var cs = [{
	"Id": "ad968f0313908578f18db7f84f6dc839a3816a74081f852d31414467275c9a0f",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_agent_1"],
	"Image": "daocloud.io/daocloud/dce-agent:0.8.0-dev",
	"Command": "/bin/sh -c 'bash /usr/local/bin/supervisord.sh'",
	"Created": 1459228608,
	"Status": "Up 5 hours",
	"Ports": [{
		"IP": "104.236.130.33",
		"PrivatePort": 8080,
		"PublicPort": 12377,
		"Type": "tcp"
	}, {
		"IP": "104.236.130.33",
		"PrivatePort": 2376,
		"PublicPort": 12376,
		"Type": "tcp"
	}],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "a4b3f2db7a16f4485978808169ef6eb06db6e67c9211b777b5ba43197e22f04c",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "agent",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.controller-ip": "104.236.130.33",
		"io.daocloud.dce.system": "build-in",
		"io.daocloud.dce.version": "0.8.0-dev"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "4d4664ca0f41867d66ef6190d6f21a9bf863d1086c91bb3f9e2a3c21a102e157",
				"Gateway": "172.18.0.1",
				"IPAddress": "172.18.0.5",
				"IPPrefixLen": 16,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": "02:42:ac:12:00:05"
			}
		}
	}
}, {
	"Id": "58df895e8e991424909dbe403d2afa33e36b8cf25263905a6509af982f3d8616",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_controller_1"],
	"Image": "daocloud.io/daocloud/dce-controller:0.8.0-dev",
	"Command": "/bin/sh -c 'bash /usr/local/bin/supervisord.sh'",
	"Created": 1459228604,
	"Status": "Up 5 hours",
	"Ports": [{
		"IP": "",
		"PrivatePort": 443,
		"PublicPort": 0,
		"Type": "tcp"
	}, {
		"IP": "104.236.130.33",
		"PrivatePort": 80,
		"PublicPort": 80,
		"Type": "tcp"
	}],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "b8bd09a9154655ed3f12116c74df3445f40f361fd96c5cdac94789d3d7b814c3",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "controller",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.system": "build-in",
		"io.daocloud.dce.version": "0.8.0-dev"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "bba65d3ee444fcc05e5732f4b024456383c65f01a4834c619fa5050d8e6253ab",
				"Gateway": "172.18.0.1",
				"IPAddress": "172.18.0.4",
				"IPPrefixLen": 16,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": "02:42:ac:12:00:04"
			}
		}
	}
}, {
	"Id": "503e6135dc02731cf192f34df62a551210a28e0f989c4e29fc0b78062dcf573c",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_swarm-manager_1"],
	"Image": "daocloud.io/daocloud/dce-swarm:0.8.0-dev",
	"Command": "/swarm -experimental manage --replication etcd://dce_etcd_1:2379",
	"Created": 1459228585,
	"Status": "Up 5 hours",
	"Ports": [{
		"IP": "104.236.130.33",
		"PrivatePort": 2375,
		"PublicPort": 2375,
		"Type": "tcp"
	}],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "dade3d66b3ce157c09ed84918aef3c19913fdb9ac20e4f21975be3b422b30af6",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "swarm-manager",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.controller-ip": "104.236.130.33",
		"io.daocloud.dce.system": "build-in",
		"io.daocloud.dce.version": "0.8.0-dev"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "57e5790261b074aff3029e85175983aca86fc2696516d8af5e32a5f6cb6ee3b5",
				"Gateway": "172.18.0.1",
				"IPAddress": "172.18.0.3",
				"IPPrefixLen": 16,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": "02:42:ac:12:00:03"
			}
		}
	}
}, {
	"Id": "87bf960eb99cb76ac6c7eb0dee49643f72ad75398df85b59aabeb3ef5076796c",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_etcd_1"],
	"Image": "daocloud.io/daocloud/dce-etcd:0.8.0-dev",
	"Command": "/etcd --name dce-etcd-104.236.130.33 --data-dir /data",
	"Created": 1459228577,
	"Status": "Up 5 hours",
	"Ports": [{
		"IP": "",
		"PrivatePort": 2380,
		"PublicPort": 0,
		"Type": "tcp"
	}, {
		"IP": "104.236.130.33",
		"PrivatePort": 12380,
		"PublicPort": 12380,
		"Type": "tcp"
	}, {
		"IP": "104.236.130.33",
		"PrivatePort": 2379,
		"PublicPort": 12379,
		"Type": "tcp"
	}, {
		"IP": "",
		"PrivatePort": 7001,
		"PublicPort": 0,
		"Type": "tcp"
	}, {
		"IP": "",
		"PrivatePort": 4001,
		"PublicPort": 0,
		"Type": "tcp"
	}],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "c56c2eac101e5824a651038f19f2b96fc2ccb1b250e7f80d7e1864623e2c7960",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "etcd",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.system": "build-in",
		"io.daocloud.dce.version": "0.8.0-dev"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "98ce9b740a83004fa9c8f21c8c2a27e3b7f34c254bd399aa86e8639fb636b956",
				"Gateway": "172.18.0.1",
				"IPAddress": "172.18.0.2",
				"IPPrefixLen": 16,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": "02:42:ac:12:00:02"
			}
		}
	}
}, {
	"Id": "0f84afe23a1a3c3b5174fb7ec6165b62fb4d435a53417918154afc00707e643a",
	"Names": ["/ubuntu-512mb-sfo1-01/clever_tesla"],
	"Image": "daocloud.io/daocloud/dce:0.8.0-dev",
	"Command": "/usr/local/bin/dce-bootstrap do-install",
	"Created": 1459228568,
	"Status": "Dead",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "2e66accefadf186c281588ddd3c1315785f64650377cca151e2ec40e0d79f76e",
	"Names": ["/ubuntu-512mb-sfo1-01/kickass_cray"],
	"Image": "daocloud.io/daocloud/dce:0.8.0-dev",
	"Command": "/usr/local/bin/dce-bootstrap do-restart",
	"Created": 1459228491,
	"Status": "Dead",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "afedfe6e986eaf1c9a56b5d32d1edd3d7b2cc8b63048a5417c5b5d286195c529",
	"Names": ["/ubuntu-512mb-sfo1-01/2333_wordpress_1"],
	"Image": "daocloud.io/wordpress:latest",
	"Command": "/entrypoint.sh apache2-foreground",
	"Created": 1459215128,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "743d79068ad9231e42a02433619bca3d0a2232d552266621783b1a2caad7ae8d",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "2333",
		"com.docker.compose.service": "wordpress",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "c24dcbedaaa45b742e36c8aa45a648ffdb16ba116efee23d95c61382cd42a3c5"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "ff8fbcb00df3bd3800224484c3b4dd6e2bfddf426cd52059641883f3cb793c53",
	"Names": ["/ubuntu-512mb-sfo1-01/2333_db_1", "/ubuntu-512mb-sfo1-01/2333_wordpress_1/2333_db_1", "/ubuntu-512mb-sfo1-01/2333_wordpress_1/db_1", "/ubuntu-512mb-sfo1-01/2333_wordpress_1/mysql"],
	"Image": "daocloud.io/mysql:latest",
	"Command": "/entrypoint.sh mysqld",
	"Created": 1459215127,
	"Status": "Exited (1) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "c2c10ef8c08ab0c8e7794b56e820a70a63a2274cf72ceeeeb85c0b2ea9112610",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "2333",
		"com.docker.compose.service": "db",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "661a19ee33270ea9332c5417392f2d79c1b7c872a4189166f07b1943432a7eb6"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "271160f09bad1f0b7b082e3fb7a063738ddae0d38ff584770645598cfeb8f809",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_2333-deployment-JtctSbWl_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459215125,
	"Status": "Exited (0) 8 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "2333-deployment-JtctSbWl",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "2333",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "42b245bd876f876d7eba1430da096d51caecdb0db1688e6c49acad58cd780410",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_hhhdfdfdf-deployment-wfBSCqPv_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459179008,
	"Status": "Exited (1) 19 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "hhhdfdfdf-deployment-wfBSCqPv",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "hhhdfdfdf",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "ccdf724679c52739aa991e85d40826ddb4219ebe5c0c149215a66a118bac2360",
	"Names": ["/ubuntu-512mb-sfo1-01/hhhdfdfdf_db_1"],
	"Image": "daocloud.io/mysql:latest",
	"Command": "/entrypoint.sh mysqld",
	"Created": 1459178975,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "c2c10ef8c08ab0c8e7794b56e820a70a63a2274cf72ceeeeb85c0b2ea9112610",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "hhhdfdfdf",
		"com.docker.compose.service": "db",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "de6df33210a89e053b6ab722353007859ba98b3d1db32cb118a7e8c14d7bb8b7"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "8889c9051f759a65248daac3657576321e4bfd08a1046b764564901e4b61b02f",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_hhhdfdfdf-deployment-SzCPEKFq_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459178972,
	"Status": "Exited (1) 19 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "hhhdfdfdf-deployment-SzCPEKFq",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "hhhdfdfdf",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "f086b3cef9c7ff51042c361062b546740c867b6722f6662d45ae77c55d3dee1e",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_lalalla-deployment-kMEAwrUa_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459178896,
	"Status": "Exited (0) 19 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "lalalla-deployment-kMEAwrUa",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "lalalla",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "c6677fc16e04701b4bf7432edbff5769f33648c3e4c1476961987f01976d984b",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_pppp-deployment-Jaiamlji_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459178808,
	"Status": "Exited (0) 19 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "pppp-deployment-Jaiamlji",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "pppp",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "8f47f20ebc61742f449225dd107c1a1aa6a4e17fb35ff56b575549fc4de2cd29",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_pppp-deployment-dSnRANRR_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459178800,
	"Status": "Exited (0) 19 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "pppp-deployment-dSnRANRR",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "pppp",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "081452c93ef62e36c2ad1ed3f1328609e851f114d060341f3f77dbcfcc641d19",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_pppp-deployment-DKGJprfT_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459178792,
	"Status": "Exited (0) 19 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "pppp-deployment-DKGJprfT",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "pppp",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "3517e9aeb15adc698dd8ffac97f5d11e97092b37b19d0a25d12658d5bba45a66",
	"Names": ["/ubuntu-512mb-sfo1-01/pppp_wordpress_1"],
	"Image": "daocloud.io/wordpress:latest",
	"Command": "/entrypoint.sh apache2-foreground",
	"Created": 1459178718,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "743d79068ad9231e42a02433619bca3d0a2232d552266621783b1a2caad7ae8d",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "pppp",
		"com.docker.compose.service": "wordpress",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "8c3c746d3cf85f3aecf5e101c76f581ba0217682729f55686bf5e838d1e8af4e"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "e5ca9a31cef59a2e06e506ad96911c74c54156f7e56b04588fe112b80a9bdc67",
	"Names": ["/ubuntu-512mb-sfo1-01/pppp_db_1", "/ubuntu-512mb-sfo1-01/pppp_wordpress_1/db_1", "/ubuntu-512mb-sfo1-01/pppp_wordpress_1/mysql", "/ubuntu-512mb-sfo1-01/pppp_wordpress_1/pppp_db_1"],
	"Image": "daocloud.io/mysql:latest",
	"Command": "/entrypoint.sh mysqld",
	"Created": 1459178718,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "c2c10ef8c08ab0c8e7794b56e820a70a63a2274cf72ceeeeb85c0b2ea9112610",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "pppp",
		"com.docker.compose.service": "db",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "5f660e742bbf0607caeb62021ef26caa6efcb145e695472717578b172c19d3e6"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "1b39bcc88385c564a6adcfcd1373b86577a969a0d0e0b50ff94987b39e109812",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_pppp-deployment-OviJOSOF_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459178716,
	"Status": "Exited (0) 19 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "pppp-deployment-OviJOSOF",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "pppp",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "7e1dc3ca7cbb153ed97eecbc1db58c4716a642c385b8f52acf40020b4442a125",
	"Names": ["/ubuntu-512mb-sfo1-01/lalalla_wordpress_1"],
	"Image": "daocloud.io/wordpress:latest",
	"Command": "/entrypoint.sh apache2-foreground",
	"Created": 1459178616,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "743d79068ad9231e42a02433619bca3d0a2232d552266621783b1a2caad7ae8d",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "lalalla",
		"com.docker.compose.service": "wordpress",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "19e5724ba819599ebb0e63d29b17b40fa9bcee74f241a91f960327805ae00897"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "48cf70abeace4b66a4081856ec6e0a5b5c06ea64037ad83b89eafa726fb39776",
	"Names": ["/ubuntu-512mb-sfo1-01/lalalla_db_1", "/ubuntu-512mb-sfo1-01/lalalla_wordpress_1/db_1", "/ubuntu-512mb-sfo1-01/lalalla_wordpress_1/lalalla_db_1", "/ubuntu-512mb-sfo1-01/lalalla_wordpress_1/mysql"],
	"Image": "daocloud.io/mysql:latest",
	"Command": "/entrypoint.sh mysqld",
	"Created": 1459178616,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "c2c10ef8c08ab0c8e7794b56e820a70a63a2274cf72ceeeeb85c0b2ea9112610",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "lalalla",
		"com.docker.compose.service": "db",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "adf5d72f4e65a564df4f3e3755c4952975faefd5a16c46686326b266119e63e4"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "33f678155c4e785f5f3d761c7cfe110799553b184553e17a49fb6e58cba5e73b",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_lalalla-deployment-wCNCFDFX_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459178614,
	"Status": "Exited (0) 19 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "lalalla-deployment-wCNCFDFX",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "lalalla",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "5a581cbe4c52fb43ec490b8341bb385a2c96272d0bd7952a10ab2db988496815",
	"Names": ["/ubuntu-512mb-sfo1-01/test_wordpress_1"],
	"Image": "daocloud.io/wordpress:latest",
	"Command": "/entrypoint.sh apache2-foreground",
	"Created": 1459173820,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "743d79068ad9231e42a02433619bca3d0a2232d552266621783b1a2caad7ae8d",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "test",
		"com.docker.compose.service": "wordpress",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "5e62afacf41bc16cd7e3115edba809ba79c6415d0640bf4ea1861557c62feae6"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "73e811c61dda661f3d9aa7787824a011d94a9a6df2584b4ccd0e6a935a36f042",
	"Names": ["/ubuntu-512mb-sfo1-01/test_db_1", "/ubuntu-512mb-sfo1-01/test_wordpress_1/db_1", "/ubuntu-512mb-sfo1-01/test_wordpress_1/mysql", "/ubuntu-512mb-sfo1-01/test_wordpress_1/test_db_1"],
	"Image": "daocloud.io/mysql:latest",
	"Command": "/entrypoint.sh mysqld",
	"Created": 1459173819,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "c2c10ef8c08ab0c8e7794b56e820a70a63a2274cf72ceeeeb85c0b2ea9112610",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "test",
		"com.docker.compose.service": "db",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "ab047b6ac2dcb00fc270032e75ee0a13742336ef9fdb7c5f20397e991976b420"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "8e6f1c60cbe5cc1f3febe2f30ad88717d924f8f60163fa4993f5c3a2f3a29c74",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_test-deployment-vguAQbVy_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459173816,
	"Status": "Exited (0) 20 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "test-deployment-vguAQbVy",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "test",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "8963e72da7a4521fd5b784d7130c6e16df8aaaa50587920670e455f409727e0a",
	"Names": ["/ubuntu-512mb-sfo1-01/focused_ride"],
	"Image": "daocloud.io/daocloud/dce:0.7.0-dev",
	"Command": "/usr/local/bin/dce-bootstrap do-upgrade",
	"Created": 1459134451,
	"Status": "Dead",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "32d06c3d3ba8bf35994b7f2eeb0fea6be69a6021efe60e1c32223e7aa46f5476",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_dce-deployment-WpGNrghd_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1459084591,
	"Status": "Exited (1) 45 hours ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "dce-deployment-WpGNrghd",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "dce",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "083f9cdf84219f676e5971577a59994538744869ded645489d6bb25972a2834b",
	"Names": ["/ubuntu-512mb-sfo1-01/dce_wordpress-deployment-MAmpuuAR_run_1"],
	"Image": "daocloud.io/daocloud/dce-compose:0.7.0-dev",
	"Command": "sh /usr/local/bin/dce-compose.sh",
	"Created": 1458996254,
	"Status": "Exited (0) 2 days ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "True",
		"com.docker.compose.project": "dce",
		"com.docker.compose.service": "wordpress-deployment-MAmpuuAR",
		"com.docker.compose.version": "1.6.2",
		"io.daocloud.dce.project": "wordpress",
		"io.daocloud.dce.system": "deployments"
	},
	"NetworkSettings": {
		"Networks": {
			"dce_default": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "8511a45e50bed83767f374bf17d33224d5ab35d588c60e5b111cfc8dc9f36b1d",
	"Names": ["/ubuntu-512mb-sfo1-01/wordpress_wordpress_1"],
	"Image": "daocloud.io/wordpress:latest",
	"Command": "/entrypoint.sh apache2-foreground",
	"Created": 1458994094,
	"Status": "Exited (137) 2 days ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "743d79068ad9231e42a02433619bca3d0a2232d552266621783b1a2caad7ae8d",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "wordpress",
		"com.docker.compose.service": "wordpress",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "5213663bdab0a344cc98defac3919abd3e40911796eb9c83c2042be533a3112e"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "0c8e3742746b933f8bc7f3b2e1fdff5e8f8b25d80f5189539be551ae88d44010",
	"Names": ["/ubuntu-512mb-sfo1-01/wordpress_db_1", "/ubuntu-512mb-sfo1-01/wordpress_wordpress_1/db_1", "/ubuntu-512mb-sfo1-01/wordpress_wordpress_1/mysql", "/ubuntu-512mb-sfo1-01/wordpress_wordpress_1/wordpress_db_1"],
	"Image": "daocloud.io/mysql:latest",
	"Command": "/entrypoint.sh mysqld",
	"Created": 1458994020,
	"Status": "Exited (137) 50 minutes ago",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {
		"com.docker.compose.config-hash": "c2c10ef8c08ab0c8e7794b56e820a70a63a2274cf72ceeeeb85c0b2ea9112610",
		"com.docker.compose.container-number": "1",
		"com.docker.compose.oneoff": "False",
		"com.docker.compose.project": "wordpress",
		"com.docker.compose.service": "db",
		"com.docker.compose.version": "1.6.2",
		"com.docker.swarm.id": "5924de1069a1e5aee31046ae19bf49f2364f3d759d0e25b11775e52abb8e6bd8"
	},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}, {
	"Id": "3c8cd777968023790244df3b9980ce1ea6837b7f57e13054c2ea2f3eef52117c",
	"Names": ["/ubuntu-512mb-sfo1-01/elated_bassi"],
	"Image": "daocloud.io/daocloud/dce:0.7.0-dev",
	"Command": "/usr/local/bin/dce-bootstrap do-upgrade",
	"Created": 1458992426,
	"Status": "Dead",
	"Ports": [],
	"SizeRw": 0,
	"SizeRootFs": 0,
	"Labels": {},
	"NetworkSettings": {
		"Networks": {
			"bridge": {
				"IPAMConfig": null,
				"Links": null,
				"Aliases": null,
				"NetworkID": "",
				"EndpointID": "",
				"Gateway": "",
				"IPAddress": "",
				"IPPrefixLen": 0,
				"IPv6Gateway": "",
				"GlobalIPv6Address": "",
				"GlobalIPv6PrefixLen": 0,
				"MacAddress": ""
			}
		}
	}
}]




a=_.groupBy(cs,v => {
	if (v.Labels["io.daocloud.dce.system"]) {
		return 'sys'
	} else {
		return 'nor'
	}
})





