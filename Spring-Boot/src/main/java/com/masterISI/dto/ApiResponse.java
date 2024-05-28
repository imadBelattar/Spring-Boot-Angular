package com.masterISI.dto;

public record ApiResponse<T>(boolean success, String message, T data) { }
