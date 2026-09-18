import type { MouseEffectsConfig, SakuraConfig } from "../types/effectsConfig";

// 审判之剑鼠标特效配置
export const mouseEffectsConfig: MouseEffectsConfig = {
	// 总开关；桌面端使用剑形鼠标，触屏和减少动态效果模式保留系统鼠标
	enable: false,
	colors: {
		primary: "#1aaef2",
		secondary: "#ffffff",
		glow: "rgba(11, 172, 246, 0.62)",
	},
	cursor: {
		size: 34,
		// SVG viewBox 内的剑尖位置，决定真正的点击热点
		hotspotX: 2.35,
		hotspotY: 2.35,
	},
	trail: {
		enable: true,
		minDistance: 12,
		maxStreaks: 6,
		streakLength: 18,
		durationMs: 360,
	},
	dragTrail: {
		enable: true,
		activationDistance: 8,
		pointSpacing: 17,
		starSize: 7,
		maxPoints: 32,
		durationMs: 760,
	},
	click: {
		enable: true,
		crossSize: 46,
		durationMs: 440,
	},
};

// 特效配置 - 集中管理所有动画特效

export const sakuraConfig: SakuraConfig = {
	// 是否默认启用水蓝气泡特效
	enable: true,

	// 是否允许用户在设置中切换
	switchable: true,

	// 气泡数量
	sakuraNum: 10,

	// 兼容原有设置字段；气泡动画始终循环
	limitTimes: -1,

	// 气泡尺寸倍数（基础尺寸为 34px）
	size: {
		// 最小尺寸倍数
		min: 0.40,
		// 最大尺寸倍数
		max: 1.50,
	},

	// 气泡不透明度
	opacity: {
		// 最小不透明度
		min: 0.52,
		// 最大不透明度
		max: 0.82,
	},

	// 气泡运动参数
	speed: {
		// 从底部到顶部的水平漂移距离（px）
		horizontal: {
			// 最小漂移距离
			min: -72,
			// 最大漂移距离
			max: 72,
		},
		// 单次上浮动画时长（秒）
		vertical: {
			// 最短时长
			min: 10,
			// 最长时长
			max: 30,
		},
		// 兼容旧配置字段
		rotation: 0,
		// 兼容旧配置字段
		fadeSpeed: 0,
	},

	// 气泡层级
	zIndex: 100,
};
